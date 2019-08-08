import React, { Suspense } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import { App } from './pages';

export default withRouter(({ location }) => (
  <Suspense fallback="loading...">
    <Switch location={location}>
      <Route exact path="/" render={() => <App />} />
    </Switch>
  </Suspense>
));
