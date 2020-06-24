import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';
import NotFound from './pages/not-found';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details/:id" component={Details} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
