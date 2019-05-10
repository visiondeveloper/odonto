import React, {Component} from 'react';
//import { Switch, Route } from 'react-router-dom';


import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import MainPage from "../pages/Main";
import ProfilePage from "../pages/Profile";
import LoginPage from '../pages/Login';

import history from './history';



const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  </Router>
);

export default Routes; 
