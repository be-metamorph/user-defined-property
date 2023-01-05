import { UserDefinedPropertyAdapter } from '@be-metamorph/user-defined-property-shared';

class DeleteUserDefinedPropertyById {
  constructor(private adapter: UserDefinedPropertyAdapter) {}

  async execute(id: string) {
    return this.adapter.deleteById(id);
  }
}

export default DeleteUserDefinedPropertyById;
