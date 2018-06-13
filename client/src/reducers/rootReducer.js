import {combineReducers} from 'redux';
import meats from './meatReducer';
import cart from './cartReducer';

//turns an object whose values are different reducing functions
//into a single reducing function that you can pass to createStore
const rootReducer = combineReducers({
  meats,
  cart
});

export default rootReducer;
