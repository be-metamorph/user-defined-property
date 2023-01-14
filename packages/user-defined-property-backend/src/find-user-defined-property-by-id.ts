import { UserDefinedPropertyAdapter } from '@be-metamorph/user-defined-property-shared';

class FindUserDefinedPropertyById {
  constructor(private adapter: UserDefinedPropertyAdapter) {}

  async execute(id: string) {
    return this.adapter.findById(id);
  }
}

export default FindUserDefinedPropertyById;
