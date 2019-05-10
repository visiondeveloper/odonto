import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './repositories/types';
import { loadRepositories , loadRepositoriesVision} from './repositories/sagas';

import { LoginsTypes, Login } from './logins/types';
import {makeLogin} from './logins/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, loadRepositories),
    //takeLatest(LoginsTypes.LOAD_REQUEST, loadLogin),
    takeLatest(LoginsTypes.MAKE_LOGIN, makeLogin),
  ]);
}
