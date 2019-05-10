import { action } from 'typesafe-actions';
import { CategoriesTypes, Category } from './types';

export const loadRequest = () => action(CategoriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Category[]) => action(CategoriesTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(CategoriesTypes.LOAD_FAILURE);

  