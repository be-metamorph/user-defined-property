import { UserDefinedPropertyAdapter } from '@be-metamorph/user-defined-property-shared';

class ArchiveUserDefinedPropertyById {
  constructor(private adapter: UserDefinedPropertyAdapter) {}

  async execute(id: string) {
    return this.adapter.archiveById(id);
  }
}

export default ArchiveUserDefinedPropertyById;
