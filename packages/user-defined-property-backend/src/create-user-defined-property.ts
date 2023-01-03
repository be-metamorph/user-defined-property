import { UserDefinedPropertyAdapter, CreateUserDefinedPropertyInput } from '@be-metamorph/user-defined-property-shared';

class CreateUserDefinedProperty {
  private adapter;

  constructor(adapter: UserDefinedPropertyAdapter) {}

  execute(input: CreateUserDefinedPropertyInput) {
    return this.adapter.insert(input);
  }
}

export default CreateUserDefinedProperty;
