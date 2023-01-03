import { UserDefinedPropertyAdapter, CreateUserDefinedPropertyInput, UserDefinedProperty } from '@be-metamorph/user-defined-property-shared';

import CreateUserDefinedProperty from './create-user-defined-property';
import FindUserDefinedPropertyById from './find-user-defined-property-by-id';

type UserDefinedPropertyBackendFacadeOptions = {
  adapter: UserDefinedPropertyAdapter;
}

class UserDefinedPropertyBackendFacade {
  private options;

  constructor(options: UserDefinedPropertyBackendFacadeOptions) {}

  createUserDefinedProperty(input: CreateUserDefinedPropertyInput): boolean {
    const createUserDefinedProperty = new CreateUserDefinedProperty(this.options.adapter);

    return createUserDefinedProperty.execute(input);
  }

  findUserDefinedPropertyById(id: string): UserDefinedProperty {
    const findUserDefinedPropertyById = new FindUserDefinedPropertyById(this.options.adapter);

    return findUserDefinedPropertyById.execute(id);
  }
}

export default UserDefinedPropertyBackendFacade;
