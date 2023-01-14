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

export type UserDefinedProperty = {
  id: string
  type: UserDefinedPropertyType
  label: string
  createdAt: Date
  entity: string
}

export interface ListUserDefinedPropertiesParams {
  page?: { limit?: number, offset?: number }
  sort?: { by?: Omit<UserDefinedProperty, 'id'>, direction?: 'asc' | 'desc' },
  entity?: string
  label?: string
  type?: UserDefinedPropertyType
}

export interface SaveRessourceUserDefinedPropertieValueInput {
  userDefinedPropertyId: string
  value: any
}

export interface SaveRessourceUserDefinedPropertieValuesInput {
  ressourceId: string
  values: SaveRessourceUserDefinedPropertieValueInput[]
}