import { UserDefinedPropertyAdapter, CreateUserDefinedPropertyInput } from '@be-metamorph/user-defined-property-shared';

type UserDefinedPropertyBackendFacadeOptions = {
  adapter: UserDefinedPropertyAdapter;
}

class UserDefinedPropertyBackendFacade {
  private options;

  constructor(options: UserDefinedPropertyBackendFacadeOptions) {}

  createUserDefinedProperty(input: CreateUserDefinedPropertyInput) {
    const createUserDefinedProperty = new CreateUserDefinedPropertyInput(this.options.adapter);

    return createUserDefinedProperty.execute(input);
  }
}

export default UserDefinedPropertyBackendFacade;
