import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation.js';
import MeatCards from '../components/MeatCards';
import '../css/Meats.css';

class Meats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
        <MeatCards meats={this.props.meats} store={this.props}/>
      </div>
    );
  }
}

//ensure that the cats property of our component is an array
Meats.propTypes = {
  meats: PropTypes.array.isRequired
};
//recieve application state from the store whenever state has changed and make
//data available to the component as props.

function mapStateToProps(state, ownProps) {
  //grab the meats from the state
  //should return a new object, the key/value pairs of which will be become available as
  //props and their values in our componenet.
  return {
    meats: state.meats
  }
}

//subscribes our container component to the store.
//It will be alerted when the state changes
//only container or "stateful" components will be connected to the store.
export default connect(mapStateToProps)(Meats);
