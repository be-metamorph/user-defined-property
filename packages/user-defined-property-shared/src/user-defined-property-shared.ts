export type UserDefinedPropertyAdapter = any;

export enum UserDefinedPropertyType {
  TEXT = 'TEXT'
}

export interface CreateUserDefinedPropertyInput {
  id: string
  type: UserDefinedPropertyType
  label: string
  entity: string
}

export interface UpdateUserDefinedPropertyInput {
  label: string
}

export class UserDefinedProperties {
  id: string
  type: UserDefinedPropertyType
  label: string
}