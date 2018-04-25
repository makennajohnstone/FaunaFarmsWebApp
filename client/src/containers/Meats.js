import React, { Component } from 'react';
import Navigation from '../components/Navigation.js';
import API from "../API.js"
import lamb from "../img/lambLoinChops.jpg";
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

  componentDidMount() {
    fetch('/meats')
      .then(res => res.json())
      .then(meats => this.setState({ meats }));
  }

  addItemToCart() {
  }

  render() {
    return (
      <div>
        <Navigation />
        <div class="container-fluid">
          <div class="row">

            <div class= "col-sm-2">
            </div>


            <div class="col-sm-8 meats-container">
              <h2>From our farms to your table. . . </h2>
              <div class="card-container">
                {this.state.meats.map(meat =>
                    <div key={meat.name} class="card">
                      <img class="card-img-top" src={lamb} />
                      <div class="card-body">
                        <h5 class="card-title"> {meat.name} </h5>
                        <div class="container">

                          <div class="row">
                            <div class="col-sm-10 price-container">
                               ${meat.price}
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
            <div class="col-sm-2">
            </div>
          </div>
        </div>
    );
  }
}

export default Meats;
