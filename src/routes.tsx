import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Links from './pages/Links';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/links" component={Links} />
    </BrowserRouter>
  );
};

export default Routes;
