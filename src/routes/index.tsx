import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import Dashboard from '../pages/Dashboard';
import Map from '../pages/Map/Map';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/create-account" component={CreateAccount} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/map/:id" component={Map} />
  </Switch>
);

export default Routes;
