import { UserDefinedPropertyAdapter } from '@be-metamorph/user-defined-property-shared';

class FindUserDefinedPropertyById {
  private adapter;

  constructor(adapter: UserDefinedPropertyAdapter) {}

  execute(id: string) {
    return this.adapter.findById(id);
  }
}

export default FindUserDefinedPropertyById;
