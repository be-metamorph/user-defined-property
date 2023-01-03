import { UserDefinedPropertyAdapter } from '@be-metamorph/user-defined-property-shared';

import UserDefinedProperty from './user-defined-property';

class FindUserDefinedPropertyById {
  private adapter;

  constructor(adapter: UserDefinedPropertyAdapter) {}

  async execute(id: string) {
    const userDefinedProperties = await this.adapter.findById(id);

    return new UserDefinedProperty(userDefinedProperties);
  }
}

export default FindUserDefinedPropertyById;
