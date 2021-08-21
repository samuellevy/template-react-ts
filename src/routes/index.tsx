import React from 'react';

import { Switch, Route } from 'react-router-dom';

import SplashScreen from '../pages/SplashScreen';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SplashScreen} />
  </Switch>
);

export default Routes;
