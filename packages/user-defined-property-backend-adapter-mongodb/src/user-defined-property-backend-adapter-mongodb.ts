import { MongoClient, MongoClientOptions } from 'mongodb';
import { CreateUserDefinedPropertyInput, UpdateUserDefinedPropertyInput, ListUserDefinedPropertiesParams } from '@be-metamorph/user-defined-property-shared';

const COLLECTION_NAMES = {
  USER_DEFINED_PROPERTY: 'userDefinedProperties',
}

class UserDefinedPropertyMongoDBAdapter {
  private client;
  private userDefinedPropertyCollection;

  constructor(url: string, options?: MongoClientOptions) {
    this.client = new MongoClient(url, options);
    this.client.connect();

    this.userDefinedPropertyCollection = this.client.db().collection(COLLECTION_NAMES.USER_DEFINED_PROPERTY);
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

    const userDefinedProperties = await this.userDefinedPropertyCollection
      .find(query)
      .skip(Number.isInteger(offset) ? offset : parseInt(limit as any))
      .limit(Number.isInteger(limit) ? limit : parseInt(limit as any))
      .sort({ [by]: { asc: 1, desc: -1 }[direction] })
      .toArray();

    return userDefinedProperties.map(this.format);
  }
}

export default UserDefinedPropertyMongoDBAdapter;
