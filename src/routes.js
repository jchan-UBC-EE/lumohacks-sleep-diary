'use strict';

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AccountContainer from './container/AccountContainer';
import AppContainer from './container/AppContainer';
import AccountCreate from './components/AccountCreate';
import Summary from './components/Summary'

const routes = (
  <Router>
    <div>
      <Switch>
      <Route exact path="/" component={AccountContainer} />
      <Route exact path="/sign-up" component={AccountCreate} />
      <Route exact path="/sleeplog" component={AppContainer} />
      <Route exact path="/summary" component={Summary} />
      </Switch>
    </div>
  </Router>
);

export default routes;
