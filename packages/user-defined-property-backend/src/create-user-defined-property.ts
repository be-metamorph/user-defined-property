import { UserDefinedPropertyAdapter, CreateUserDefinedPropertyInput } from '@be-metamorph/user-defined-property-shared';

class CreateUserDefinedProperty {
  constructor(private adapter: UserDefinedPropertyAdapter) {}

  execute(input: CreateUserDefinedPropertyInput) {
    return this.adapter.insert(input);
  }
}

export default CreateUserDefinedProperty;
