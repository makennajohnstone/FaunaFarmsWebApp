import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import Navigation from '../components/Navigation.js';
import '../css/Farmers.css';

class Checkout extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <Navigation />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" component="input" type="text" placeholder="First Name"/>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="text" placeholder="Email"/>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <Field name="phone" component="input" type="text" placeholder="Phone"/>
          </div>
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'checkout'
})(Checkout)
