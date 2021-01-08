import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import DisplayMoreInfo from '../pages/DisplayMoreInfo';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/displaymoreinfo" component={DisplayMoreInfo}/>
  </Switch>
);

export default Routes;
