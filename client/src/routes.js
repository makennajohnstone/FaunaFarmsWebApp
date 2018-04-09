import React from 'react';
import { Route } from 'react-router-dom';
import App from './App.js';
import Meats from './containers/Meats.js';

export default (
  //display the App component when the url is equal to this path
  <Route path='/' component={App}>
    <Route path='/meats' component={Meats} />
  </Route>
);
