import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadRequestVision = () => action(RepositoriesTypes.LOAD_REQUEST_VISION);

export const loadSuccess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);

  