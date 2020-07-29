import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/create-account" exact component={CreateAccount} />
  </Switch>
);

export default Routes;
