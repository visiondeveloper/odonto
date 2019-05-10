import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import './App.scss';

import RepositoryList from './components/RepositoryList';

import {store, persistor  } from './store';

import  Routes  from './routes';

//const App = () => <Provider store={store}><RepositoryList /></Provider>;

class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes/>
          </PersistGate>
        </Provider>
      );
    }
  }


export default App;
