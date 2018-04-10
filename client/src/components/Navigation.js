import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../css/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav class="navbar fixed-top">
        <div class="logo">
          <div class="title"> Fauna Farms </div>
          <div class="subtitle"> a meat co. </div>
        </div>
        <div class="container">
          <Link to='/'>Home</Link>
          <Link to='/meats'>Meats</Link>
          <Link to='/farmers'>Farmers</Link>
          <Link to='/recipes'>Recipes</Link>
        </div>
      </nav>
    );
  }
}

export default Navigation;
