import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import { Link } from 'react-router-dom';
import Meats from './containers/Meats.js';
import Farmers from './containers/Farmers.js';
import Home from './containers/Home.js';
import Checkout from './containers/Checkout.js';
import Cart from './containers/Cart.js';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/meats' component={Meats} />
          <Route path='/farmers' component={Farmers} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/cart' component={Cart} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
