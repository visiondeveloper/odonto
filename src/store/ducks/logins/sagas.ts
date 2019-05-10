import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';
import { Login } from './types';


export function* loadLogins() {
  try {
    const response = yield call(api.post, 'V1/categories');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* makeLogin() {
  try {
    console.log('entrou saga');
    const params = {
      email: 'vitor@hunterapp.app', 
      password : '123456'
    }

    const response = yield call(api.post, 'login/authenticate', params);
    console.log(response);
    yield put(loadSuccess(response.data));
  } catch (err) {
    console.log('entrou erro saga');
    console.log(err);
    yield put(loadFailure()); 
  }
}
