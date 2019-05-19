import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Home from './components/layout/home/Home';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact to='/' component={Home} />
    </Switch>
  );
};

export default MainRouter;
