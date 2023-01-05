import { UserDefinedProperties } from '@be-metamorph/user-defined-property-shared';

class UserDefinedProperty {
  constructor(private properties: UserDefinedProperties) {}

  snapshot() {
    return this.properties;
  }
}

export default UserDefinedProperty;
