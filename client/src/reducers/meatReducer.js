import * as types from '../constants/ActionTypes';
import initialState from './initialState';

//reducers return application state. Application state should be treated as immutable
//so that we don't make changes to the state that inadvertently affect other areas of
//our application, such as component subscribed to the store.

//Our reducer should return a brand-new object, with copies of any objects it needs
//from the previous state and NEVER alter the previous state.
export default function meatReducer(state = initialState.meats, action) {
  switch(action.type) {
    case types.LOAD_MEATS_SUCCESS:
      return action.meats
    default:
      return state;
  }
}
