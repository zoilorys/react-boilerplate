import { lazy } from 'react';

export const Home = lazy(() => import(/* webpackChunkName: "home-chunk" */ './Home'));
export const About = lazy(() => import(/* webpackChunkName: "about-chunk" */ './About'));
