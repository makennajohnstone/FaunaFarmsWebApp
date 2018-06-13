import React, { Component } from 'react';
import Navigation from '../components/Navigation.js';
import hills from '../img/Hills.png';
import cows from '../img/video.jpg';
import '../css/Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div class="text">
          <h5> Creating a market for farmers to </h5>
          <h5> practice sustainable agriculture. </h5>
        </div>
        <div class="container hills-img-container">
          <img class="hills-img" src={hills}/>
        </div>
        <div class="container cows-img-container">
          <img src={cows} alt="" />
        </div>
      </div>
    );
  }
}

export default Home;
