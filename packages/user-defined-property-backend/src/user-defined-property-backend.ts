import { UserDefinedPropertyAdapter, CreateUserDefinedPropertyInput } from '@be-metamorph/user-defined-property-shared';

import UserDefinedProperty from './user-defined-property';
import CreateUserDefinedProperty from './create-user-defined-property';
import FindUserDefinedPropertyById from './find-user-defined-property-by-id';

type UserDefinedPropertyBackendFacadeOptions = {
  adapter: UserDefinedPropertyAdapter;
}

class UserDefinedPropertyBackendFacade {
  private options: UserDefinedPropertyBackendFacadeOptions;

  constructor(options: UserDefinedPropertyBackendFacadeOptions) {
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
}

export default UserDefinedPropertyBackendFacade;
