import { UserDefinedPropertyAdapter, CreateUserDefinedPropertyInput, UpdateUserDefinedPropertyInput } from '@be-metamorph/user-defined-property-shared';

import UserDefinedProperty from './user-defined-property';
import CreateUserDefinedProperty from './create-user-defined-property';
import FindUserDefinedPropertyById from './find-user-defined-property-by-id';
import DeleteUserDefinedPropertyById from './delete-user-defined-property-by-id';
import UpdateUserDefinedProperty from './update-user-defined-property';

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

  deleteUserDefinedPropertyById(id: string): Promise<boolean> {
    const deleteUserDefinedPropertyById = new DeleteUserDefinedPropertyById(this.options.adapter);

    return deleteUserDefinedPropertyById.execute(id);
  }

  updateUserDefinedProperty(id: string, input: UpdateUserDefinedPropertyInput): boolean {
    const updateUserDefinedProperty = new UpdateUserDefinedProperty(this.options.adapter);

    return updateUserDefinedProperty.execute(id, input);
  }
}

export default UserDefinedPropertyBackendFacade;
