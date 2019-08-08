import { lazy } from 'react';

export const App = lazy(() => import(/* webpackChunkName: "app-chunk" */ './App'));
