import { UserDefinedPropertyAdapter, CreateUserDefinedPropertyInput } from '@be-metamorph/user-defined-property-shared';

import CreateUserDefinedProperty from './create-user-defined-property';

type UserDefinedPropertyBackendFacadeOptions = {
  adapter: UserDefinedPropertyAdapter;
}

class UserDefinedPropertyBackendFacade {
  private options;

  constructor(options: UserDefinedPropertyBackendFacadeOptions) {}

  createUserDefinedProperty(input: CreateUserDefinedPropertyInput) {
    const createUserDefinedProperty = new CreateUserDefinedProperty(this.options.adapter);

    return createUserDefinedProperty.execute(input);
  }
}

export default UserDefinedPropertyBackendFacade;
