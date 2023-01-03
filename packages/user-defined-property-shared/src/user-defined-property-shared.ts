export type UserDefinedPropertyAdapter = any;

export enum UserDefinedPropertyType {
  TEXT = 'TEXT'
}

export interface CreateUserDefinedPropertyInput {
  type: UserDefinedPropertyType
  label: string
}

export type UserDefinedProperty = {
  type: UserDefinedPropertyType
  label: string
}