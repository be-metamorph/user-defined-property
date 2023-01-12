import { UserDefinedPropertyAdapter } from '@be-metamorph/user-defined-property-shared';

class GetRessourceUserDefinedPropertyValues {
  constructor(private adapter: UserDefinedPropertyAdapter) {}

  async execute(ressourceId: string) {
    return this.adapter.getRessourceUserDefinedPropertyValues(ressourceId);
  }
}

export default GetRessourceUserDefinedPropertyValues;
