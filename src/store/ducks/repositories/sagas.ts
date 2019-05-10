import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* loadRepositories() {
  try {
    const response = yield call(api.get, 'users/diego3g/repos');
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}


export function* loadRepositoriesVision() {
  try {
    const response = yield call(api.get, 'users/rocketseat/repos');
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
