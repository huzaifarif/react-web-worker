import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Adder from './Components/adder/adder';
import AdderWorker from './Components/adder/adderWorker';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/no-worker" component={Adder} />
      <Route path="/worker" component={AdderWorker} />
      <Redirect to="/no-worker" />
    </Switch>
  </BrowserRouter>
);

export default Routes;