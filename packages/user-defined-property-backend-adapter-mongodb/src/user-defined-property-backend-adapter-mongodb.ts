import { MongoClient, MongoClientOptions } from 'mongodb';
import {
  CreateUserDefinedPropertyInput,
  UpdateUserDefinedPropertyInput,
  ListUserDefinedPropertiesParams,
  SaveRessourceUserDefinedPropertieValuesInput,
} from '@be-metamorph/user-defined-property-shared';

const COLLECTION_NAMES = {
  USER_DEFINED_PROPERTY: 'userDefinedProperties',
  USER_DEFINED_PROPERTY_VALUE: 'userDefinedPropertyValues',
}

class UserDefinedPropertyMongoDBAdapter {
  private client;
  private userDefinedPropertyCollection;
  private userDefinedPropertyValueCollection;

  constructor(url: string, options?: MongoClientOptions) {
    this.client = new MongoClient(url, options);
    this.client.connect();

    this.userDefinedPropertyCollection = this.client.db().collection(COLLECTION_NAMES.USER_DEFINED_PROPERTY);
    this.userDefinedPropertyValueCollection = this.client.db().collection(COLLECTION_NAMES.USER_DEFINED_PROPERTY_VALUE);
  }

  private format({ _id, ...userDefinedProperty }) {
    return userDefinedProperty;
  }

  getClient() {
    return this.client;
  }

  async insert(input: CreateUserDefinedPropertyInput) {
    await this.userDefinedPropertyCollection.insertOne(input);

    return true;
  }

  async update(id: string, input: UpdateUserDefinedPropertyInput) {
    await this.userDefinedPropertyCollection.updateOne({ id }, { $set: input });

    return true;
  }

  async findById(id: string) {
    return this.format(await this.userDefinedPropertyCollection.findOne({ id }));
  }

  async deleteById(id: string) {
    await this.userDefinedPropertyCollection.deleteOne({ id })

    return true;
  }

  async find({
    page: { offset = 0, limit = 25 } = {},
    sort: { by = 'label', direction = 'asc' } = {},
    entity,
    type,
    label,
  }: ListUserDefinedPropertiesParams  = {}) {
    const query: Pick<ListUserDefinedPropertiesParams, 'entity' | 'type'> & { label?: RegExp } = {};

    if (entity) query.entity = entity;
    if (type) query.type = type;
    if (label && label.length) query.label = new RegExp(`.*${label}.*`);

    const [result] = await this.userDefinedPropertyCollection
      .aggregate([
        { $match: query },
        { $facet: {
          total: [{ $count: 'count' }],
          userDefinedProperties: [
            { $sort: { [by]: { asc: 1, desc: -1 }[direction] } },
            { $skip: Number.isInteger(offset) ? offset : parseInt(limit as any) },
            { $limit: Number.isInteger(limit) ? limit : parseInt(limit as any) },
          ]
        }}
      ])
      .toArray();

    return {
        metadata: {
            count: result.userDefinedProperties.length,
            total: result.total[0] ? result.total[0].count : 0,
        },
        data: result.userDefinedProperties.map(this.format)
    };
  }

  async saveRessourceUserDefinedPropertyValues({ ressourceId, values }: SaveRessourceUserDefinedPropertieValuesInput) {
    await this.userDefinedPropertyValueCollection.bulkWrite(
      values.map(({ userDefinedPropertyId, value }) => ({
        updateOne: {
          filter: { userDefinedPropertyId, ressourceId },
          update: { $set: { value } },
          upsert: true,
        }
      }))
    )

    return true;
  }

  async getRessourceUserDefinedPropertyValues(ressourceId: string) {
    return this.userDefinedPropertyValueCollection
      .aggregate([
        { $match : { ressourceId } },
        { $lookup: {
          from: COLLECTION_NAMES.USER_DEFINED_PROPERTY,
          localField: 'userDefinedPropertyId',
          foreignField: 'id',
          as: 'userDefinedProperty'
        }},
        { $addFields: { userDefinedProperty: { $arrayElemAt: ['$userDefinedProperty', 0] } }},
        { $unset: 'userDefinedProperty._id' },
        { $project: { _id: 0, userDefinedProperty: 1, value: 1 }}
      ])
      .toArray()
  }
}

export default UserDefinedPropertyMongoDBAdapter;
