import React, { Component } from 'react';
import Navigation from '../components/Navigation.js';
import mountain from '../img/mountain.jpg';

import '../css/Home.css';
import Carousel from '../components/MyCarousel.js';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Carousel />
      </div>
    );
  }
}

export default Home;
