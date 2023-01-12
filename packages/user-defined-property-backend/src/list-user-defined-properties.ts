import { UserDefinedPropertyAdapter, ListUserDefinedPropertiesParams } from '@be-metamorph/user-defined-property-shared';

class ListUserDefinedProperties {
  constructor(private adapter: UserDefinedPropertyAdapter) {}

  async execute(params: ListUserDefinedPropertiesParams) {
    return this.adapter.find(params);
  }
}

export default ListUserDefinedProperties;
