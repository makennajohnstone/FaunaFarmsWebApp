import React, { Component } from 'react';
import Navigation from '../components/Navigation.js'; 
import '../css/Meats.css';

class Meats extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1> This is the meats page! </h1>
      </div>
    );
  }
}

export default Meats;
