import React from 'react';
import { Route } from 'react-router-dom';

// components
import Home from './components/layout/home/Home';
import Services from './components/layout/services/Services';
import Work from './components/layout/work/Work';

const MainRouter = () => {
  return (
    <>
      <Route exact to='/' component={Home} />
      <Route exact to='/' component={Services} />
      <Route exact to='/' component={Work} />
    </>
  );
};

export default MainRouter;
