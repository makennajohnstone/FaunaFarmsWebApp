import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import '../css/Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.renderCheckout = this.renderCheckout.bind(this);
  }

  renderCheckout() {
    this.props.history.push('/checkout');
  }

  render() {
    return (
      <div>
        <Navigation />
        <div class="shopping-cart-container">
          <h1 class="shopping-cart-text"> Your Shopping Cart </h1>
          <table class="table">
            <thead>
              <tr class="header-row">
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.items.map(item =>
              <tr key={item.Name}>
                <div class="container">
                    <td class="row cart-item">
                      <div class="col-md-4">
                        <img class="cart-item-img" src={item.Picture} />
                      </div>
                      <div class="col-md-8">
                        <p class="cart-item-title"> {item.Name} </p>
                      </div>
                      <p class="cart-item-description"> {item.Description} </p>
                    </td>
                </div>
                <td class="card-price"> ${item.Price} </td>
                <td class="card-quantity"> 1 </td>
              </tr>)}
            </tbody>
          </table>
          <div class="total-container">
            Total: ${this.props.cart.totalPrice}
          </div>
          <div class="btn-container">
            <button class="checkout-btn" onClick={this.renderCheckout}>
              Check Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}


Cart.propTypes = {
  cart: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps)(Cart);
