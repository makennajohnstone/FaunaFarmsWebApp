import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import { Link } from 'react-router-dom';
import Meats from './containers/Meats.js';
import Farmers from './containers/Farmers.js';
import Home from './containers/Home.js';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/meats' component={Meats} />
          <Route path='/farmers' component={Farmers} />
        </div>
      </Router>
    );
  }
}

export default App;
