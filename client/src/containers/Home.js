import React, { Component } from 'react';
import Navigation from '../components/Navigation.js';
import '../css/Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div class="container">
          <div class="mountain-img">
            <img src="mountain.jpg" />
          </div>
          <div class="text">
            Creating a market for farmers to practice sustainable agriculture.
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
