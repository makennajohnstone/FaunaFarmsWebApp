import React, { Component } from 'react';
import Navigation from '../components/Navigation.js';
import '../css/Farmers.css';

class Farmers extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1> This is the farmers page! </h1>
      </div>
    );
  }
}

export default Farmers;
