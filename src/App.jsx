import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import Homepage from './pages/Landing';
import Login from './components/containers/Login/Login';
import Signup from './components/containers/Signup/Signup';
import Parties from './pages/Parties';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/parties" component={Parties} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
