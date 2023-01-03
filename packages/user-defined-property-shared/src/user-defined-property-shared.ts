export type UserDefinedPropertyAdapter = any;

export enum UserDefinedPropertyType {
  TEXT = 'TEXT'
}

export interface CreateUserDefinedPropertyInput {
  id: string
  type: UserDefinedPropertyType
  label: string
}

export type UserDefinedProperty = {
  id: string
  type: UserDefinedPropertyType
  label: string
}