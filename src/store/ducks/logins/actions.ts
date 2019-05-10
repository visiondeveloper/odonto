import { action } from 'typesafe-actions';
import { LoginsTypes, Login } from './types';

export const loadRequest = () => action(LoginsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Login[]) => action(LoginsTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(LoginsTypes.LOAD_FAILURE);

export const makeLogin = (data: Login) => action(LoginsTypes.MAKE_LOGIN, {data}); 


  