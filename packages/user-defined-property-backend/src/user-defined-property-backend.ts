import {
  UserDefinedPropertyAdapter,
  CreateUserDefinedPropertyInput,
  UpdateUserDefinedPropertyInput,
  ListUserDefinedPropertiesParams,
  SaveRessourceUserDefinedPropertieValuesInput,
} from '@be-metamorph/user-defined-property-shared';

import UserDefinedProperty from './user-defined-property';
import CreateUserDefinedProperty from './create-user-defined-property';
import FindUserDefinedPropertyById from './find-user-defined-property-by-id';
import DeleteUserDefinedPropertyById from './delete-user-defined-property-by-id';
import UpdateUserDefinedProperty from './update-user-defined-property';
import ListUserDefinedProperties from './list-user-defined-properties';
import SaveRessourceUserDefinedPropertyValues from './save-ressource-user-defined-property-values';
import GetRessourceUserDefinedPropertyValues from './get-ressource-user-defined-property-values';

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

  litUserDefinedProperties(params: ListUserDefinedPropertiesParams) {
    const listUserDefinedProperties = new ListUserDefinedProperties(this.options.adapter);

    return listUserDefinedProperties.execute(params);
  }

  saveRessourceUserDefinedPropertyValues(input: SaveRessourceUserDefinedPropertieValuesInput) {
    const saveRessourceUserDefinedPropertyValues = new SaveRessourceUserDefinedPropertyValues(this.options.adapter);

    return saveRessourceUserDefinedPropertyValues.execute(input);
  }

  getRessourceUserDefinedPropertyValues(ressourceId: string) {
    const getRessourceUserDefinedPropertyValues =  new GetRessourceUserDefinedPropertyValues(this.options.adapter);

    return getRessourceUserDefinedPropertyValues.execute(ressourceId);
  }
}

export default UserDefinedPropertyBackendFacade;
