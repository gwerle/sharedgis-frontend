import React from 'react';
import { isAuthenticated } from './auth';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LoginContainer from './containers/LoginContainer';
import Dashboard from './components/Dashboard/Dashboard';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <LoginContainer />} />
      <PrivateRoute path="/dashboard" component={() => <Dashboard />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
