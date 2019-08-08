import { hot } from 'react-hot-loader';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

import config from './config';

const AppRouter = () => (
  <Router>
    <Routes />
  </Router>
);

export default config.isDev ? hot(module)(AppRouter) : AppRouter;
