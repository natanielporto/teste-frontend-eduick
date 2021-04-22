import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import LandingPage from '../pages/LandingPage';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
