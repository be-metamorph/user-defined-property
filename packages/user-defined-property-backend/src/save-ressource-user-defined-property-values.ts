import { UserDefinedPropertyAdapter, SaveRessourceUserDefinedPropertieValuesInput } from '@be-metamorph/user-defined-property-shared';

class ListUserDefinedProperties {
  constructor(private adapter: UserDefinedPropertyAdapter) {}

  async execute(input: SaveRessourceUserDefinedPropertieValuesInput) {
    return this.adapter.saveRessourceUserDefinedPropertyValues(input);
  }
}

export default ListUserDefinedProperties;
