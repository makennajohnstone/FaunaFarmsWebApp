import React, { Component } from "react";
import { Link, Redirect, withRouter } from 'react-router-dom';
import '../css/Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.renderCart = this.renderCart.bind(this);
  }

  renderCart() {
    this.props.history.push('/cart');
  }

  render() {
    return (
      <div>
        <div class="navbar">
          <h1 id="title">Fauna Farms</h1>
          <Link id="cart-link" to='/cart'>My Cart</Link>
          <h3 id="meat-stuff"> a meat co. </h3>
          <div class="link-container">
            <Link class="nav-links" to='/'>Home</Link>
            <Link class="nav-links" to='/meats'>Meats</Link>
            <Link class="nav-links" to='/farmers'>Farmers</Link>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(Navigation);
