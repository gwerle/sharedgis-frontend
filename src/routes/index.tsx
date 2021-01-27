import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import Dashboard from '../pages/Dashboard';
import Map from '../pages/Map';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/create-account" exact component={CreateAccount} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/map/:id" exact component={Map} />
  </Switch>
);

export default Routes;
