import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header'
import App from './App';
import SpeciesDetails from '../containers/SpeciesDetails';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/species/:name" component={SpeciesDetails} />
    </Switch>
  </BrowserRouter>
);

export default Router;
