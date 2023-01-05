import { MongoClient, MongoClientOptions } from 'mongodb';
import { UserDefinedPropertyAdapter, CreateUserDefinedPropertyInput, UpdateUserDefinedPropertyInput } from '@be-metamorph/user-defined-property-shared';

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

  getClient() {
    return this.client;
  }

  async insert(input: CreateUserDefinedPropertyInput) {
    await this.userDefinedPropertyCollection.insertOne(input);

    return true;
  }

  async update(id: string, input: UpdateUserDefinedPropertyInput) {
    await this.userDefinedPropertyCollection.updateOne({ id }, input);

    return true;
  }

  async findById(id: string) {
    const { _id, ...userDefinedProperties } = await this.userDefinedPropertyCollection.findOne({ id });

    return userDefinedProperties;
  }

  async deleteById(id: string) {
    await this.userDefinedPropertyCollection.deleteOne({ id })

    return true;
  }
}

export default UserDefinedPropertyMongoDBAdapter;
