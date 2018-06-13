import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function cartReducer(state = initialState.cart, action) {
  switch(action.type) {
    case types.ADD_TO_CART_SUCCESS:
        return Object.assign({}, state, {
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + action.meat.Price, 
          items: [
            ...state.items,
            action.meat
          ]
        })
    default:
      return state;
  }
}
