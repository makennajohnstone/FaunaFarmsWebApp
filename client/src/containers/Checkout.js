import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import Navigation from '../components/Navigation.js';
import '../css/Checkout.css';

class Checkout extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <Navigation />
        <div class="page-container">
          <h3 class="place-your-order"> Just grabbing a few details... </h3>
          <form onSubmit={handleSubmit}>
            <h3 class="form-heading"> Personal Information </h3>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <Field name="firstName" component="input" type="text" placeholder="First Name"/>
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field name="email" component="input" type="text" placeholder="Email"/>
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <Field name="phone" component="input" type="text" placeholder="Phone"/>
            </div>

            <h3 class="form-heading"> Shipping Information </h3>
            <div>
              <label htmlFor="addressLine1">Address Line 1:</label>
              <Field name="addressLine1" component="input" type="text" placeholder="Street Address"/>
            </div>
            <div>
              <label htmlFor="addressLine2">Address Line 2:</label>
              <Field name="addressLine2" component="input" type="text" placeholder="Apartment, Suite, Unit, etc."/>
            </div>
            <div>
              <label htmlFor="city">City:</label>
              <Field name="city" component="input" type="text" placeholder="City"/>
            </div>
            <div>
              <label htmlFor="state">State:</label>
              <Field name="state" component="input" type="text" placeholder="State"/>
            </div>
            <div>
              <label htmlFor="zip">Zip:</label>
              <Field name="zip" component="input" type="text" placeholder="Zip"/>
            </div>
            <div>
              <label htmlFor="country">Country:</label>
              <Field name="country" component="input" type="text" placeholder="Country"/>
            </div>

            <h3 class="form-heading"> Payment Information </h3>
            <div>
              <label htmlFor="cardNumber">Card Number:</label>
              <Field name="cardNumber" component="input" type="text" placeholder="Card Number"/>
            </div>
            <div>
              <label htmlFor="expDate">Expiration Date:</label>
              <Field name="expDate" component="input" type="text" placeholder="Expiration Date"/>
            </div>
            <div>
              <label htmlFor="cvv">CVV:</label>
              <Field name="cvv" component="input" type="text" placeholder="CVV"/>
            </div>
            <button class="place-order-btn" type="submit"> Place Order </button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'checkout'
})(Checkout)
