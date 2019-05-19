import React from 'react';
import { Route } from 'react-router-dom';

// components
import Home from './components/layout/home/Home';
import Services from './components/layout/services/Services';

const MainRouter = () => {
  return (
    <>
      <Route exact to='/' component={Home} />
      <Route exact to='/' component={Services} />
    </>
  );
};

export default MainRouter;
