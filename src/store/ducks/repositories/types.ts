/**
 * Action types
 */
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
  LOAD_REQUEST_VISION = '@repositories/LOAD_REQUEST_VISION'
}

/**
 * Data types
 */
export interface Repository {
  id: number
  name: string
}

/**
 * State type
 */
export interface RepositoriesState {
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
}
