import React, { Suspense } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import { Home, About } from './pages';

export default withRouter(({ location }) => (
  <Suspense fallback="">
    <Switch location={location}>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/about" render={() => <About />} />
    </Switch>
  </Suspense>
));
