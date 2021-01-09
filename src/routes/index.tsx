import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Searchbar from '../components/Searchbar';

import Dashboard from '../pages/Dashboard';
import DisplayMoreInfo from '../pages/DisplayMoreInfo';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/displaymoreinfo/:id" component={DisplayMoreInfo}/>
    <Route path="/displayseach/movie-title" component={Searchbar}/>
  </Switch>
);

export default Routes;
