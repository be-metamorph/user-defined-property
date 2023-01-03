import { MongoClient, MongoClientOptions } from 'mongodb';

class UserDefinedPropertyMongoDBAdapter {
  private client;

  constructor(url: string, options?: MongoClientOptions) {
    this.client = new MongoClient(url, options);
  }

  getClient() {
    return this.client;
  }
}

export default UserDefinedPropertyMongoDBAdapter;
