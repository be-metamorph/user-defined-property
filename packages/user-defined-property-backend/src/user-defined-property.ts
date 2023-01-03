import { UserDefinedProperties } from '@be-metamorph/user-defined-property-shared';

class UserDefinedProperty {
  private properties;

  constructor(properties: UserDefinedProperties) {}

  snapshot() {
    return this.properties;
  }
}

export default UserDefinedProperty;
