import { UserDefinedPropertyAdapter, UpdateUserDefinedPropertyInput } from '@be-metamorph/user-defined-property-shared';

class UpdateUserDefinedProperty {
  constructor(private adapter: UserDefinedPropertyAdapter) {}

  execute(id: string, input: UpdateUserDefinedPropertyInput) {
    return this.adapter.update(id, input);
  }
}

export default UpdateUserDefinedProperty;
