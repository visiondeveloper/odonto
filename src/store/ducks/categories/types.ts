/**
 * Action types
 */
export enum CategoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Category {
  id: string
  name: string,
  description: string,
  slug : string,
  status : number
}

/**
 * State type
 */
export interface CategoriesState {
  readonly data: Category[]
  readonly loading: boolean
  readonly error: boolean
}
