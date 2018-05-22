import React, { Component } from 'react';
import Navigation from '../components/Navigation.js';
import API from "../API.js"
import '../css/Meats.css';

class Meats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meats: [],
      colIdx: 0
    };
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  // componentDidMount() {
  //   fetch('/meats')
  //     .then(res => res.json())
  //     .then(meats => this.setState({ meats }));
  // }

  addItemToCart() {
  }

  render() {
    return (
      <div>
        <Navigation />
        <div class="container-fluid">
          <div class="row">
            <div class="container-fluid">
              {this.state.meats.map(meat =>
                  <div key={meat.name} class="card">
                    <img class="card-img-top" src={meat.Picture} />
                    <div class="card-body">
                      <h5 class="card-title"> {meat.Name} </h5>
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-10 price-container">
                             ${meat.Price}
                          </div>
                          <div class="col-sm-2">
                              <i class="fas fa-shopping-cart"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>)}
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default Meats;
