import { UserDefinedPropertyAdapter, CreateUserDefinedPropertyInput } from '@be-metamorph/user-defined-property-shared';

import UserDefinedProperty from './user-defined-property';
import CreateUserDefinedProperty from './create-user-defined-property';
import FindUserDefinedPropertyById from './find-user-defined-property-by-id';
import ArchiveUserDefinedPropertyById from './archive-user-defined-property-by-id';
import DeleteUserDefinedPropertyById from './delete-user-defined-property-by-id';

type UserDefinedPropertyBackendFacadeOptions = {
  adapter: UserDefinedPropertyAdapter;
}

class UserDefinedPropertyBackendFacade {
  constructor(private options: UserDefinedPropertyBackendFacadeOptions) {
    this.options = options;
  }

  createUserDefinedProperty(input: CreateUserDefinedPropertyInput): boolean {
    const createUserDefinedProperty = new CreateUserDefinedProperty(this.options.adapter);

    return createUserDefinedProperty.execute(input);
  }

  findUserDefinedPropertyById(id: string): Promise<UserDefinedProperty> {
    const findUserDefinedPropertyById = new FindUserDefinedPropertyById(this.options.adapter);

    return findUserDefinedPropertyById.execute(id);
  }

  archiveUserDefinedPropertyById(id: string): Promise<boolean> {
    const archiveUserDefinedPropertyById = new ArchiveUserDefinedPropertyById(this.options.adapter);

    return archiveUserDefinedPropertyById.execute(id);
  }

  deleteUserDefinedPropertyById(id: string): Promise<boolean> {
    const deleteUserDefinedPropertyById = new DeleteUserDefinedPropertyById(this.options.adapter);

    return deleteUserDefinedPropertyById.execute(id);
  }
}

export default UserDefinedPropertyBackendFacade;
