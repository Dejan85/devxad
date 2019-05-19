import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//components
import MainRouter from './MainRouter';

function App() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;
