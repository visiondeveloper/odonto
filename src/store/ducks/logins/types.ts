/**
 * Action types
 */
export enum LoginsTypes {
  LOAD_REQUEST = '@logins/LOAD_REQUEST',
  LOAD_SUCCCES = '@logins/LOAD_SUCCCES',
  LOAD_FAILURE = '@logins/LOAD_FAILURE',
  MAKE_LOGIN = '@logins/MAKE_LOGIN',
  IS_LOGGED = '@logins/IS_LOGGED',
}

/**
 * Data types
 */
export interface Login {
  emailActive: number,
  createdAt: string,
  updatedAt: string,
  role : string,
  status : number,
  _id : string,
  name : string,
  email: string,
  password:string,
  __v: number,
  jwtToken: string
}

/**
 * State type
 */
export interface LoginsState {
  readonly data: Login[]
  readonly loading: boolean
  readonly error: boolean,
  readonly message: [],
  readonly login : Login
}
