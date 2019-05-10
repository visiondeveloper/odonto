import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { RepositoriesState } from './ducks/repositories/types';
import { CategoriesState} from './ducks/categories/types';
import { MessagesState} from './ducks/messages/types';
import { LoginsState } from './ducks/logins/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  repositories: RepositoriesState,
  categories : CategoriesState,
  messages : MessagesState,
  logins: LoginsState
}

const persistConfig = {
  key:'odonto',
  storage,
  whitelist: ['logins']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor};

