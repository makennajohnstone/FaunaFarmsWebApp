import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import { Link } from 'react-router-dom';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default App;
