import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { addMeatToCart } from '../actions/CartActions';


class MeatCards extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(meatItem) {
    this.props.store.dispatch(addMeatToCart(meatItem));
    window.alert(meatItem.Name + " has been added to your cart.");
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="container-fluid">
            {this.props.meats.map(meat =>
                <div key={meat.Name} class="card">
                  <img class="card-img-top" src={meat.Picture} />
                  <div class="card-body">
                    <h5 class="card-title"> {meat.Name} </h5>
                    <div class="container">
                      <div class="row">
                        <div class="col-sm-10 price-container">
                           ${meat.Price}
                        </div>
                        <div class="col-sm-2">
                            <i class="fas fa-shopping-cart" onClick={(meatItem) => this.addToCart(meat)}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
    );
  }
}

export default MeatCards;
