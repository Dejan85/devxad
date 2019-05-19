import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//components
import MainRouter from './MainRouter';

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
