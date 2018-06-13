import * as types from '../constants/ActionTypes';

//CART functionality
export function addMeatToCart(meat) {
  return function(dispatch) {
    dispatch(addToCartSuccess(meat))
  }
}

export function addToCartSuccess(meat) {
  return {
    type: types.ADD_TO_CART_SUCCESS,
    meat
  };
}
