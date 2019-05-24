import React from 'react';
import { Route } from 'react-router-dom';

//components
import Homepage from './pages/Landing';

const App = () => {
  return <Route exact path="/" component={Homepage} />;
};

export default App;
