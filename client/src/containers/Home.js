import React, { Component } from 'react';
import Navigation from '../components/Navigation.js';
<<<<<<< HEAD
import '../css/Home.css';
=======
import mountain from '../img/mountain.jpg';

import '../css/Home.css';
import Carousel from '../components/MyCarousel.js';
>>>>>>> fcd21f185c8681681eb1b310b2384c80f2fd6cd8

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
<<<<<<< HEAD
        <div class="container">
          <div class="mountain-img">
            <img src="mountain.jpg" />
          </div>
          <div class="text">
            Creating a market for farmers to practice sustainable agriculture.
          </div>
        </div>
=======
        <Carousel />
>>>>>>> fcd21f185c8681681eb1b310b2384c80f2fd6cd8
      </div>
    );
  }
}

export default Home;
