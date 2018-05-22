import * as types from '../constants/ActionTypes';
import MeatApi from '../api/MeatApi';

//Calls our meatApi instance
//dispatches another action (loadMeatsSuccess) with an argument of the meats payload that we recieved from the api
export function loadMeats() {
  return function(dispatch) {
    return MeatApi.getAllMeats().then(meats => {
      dispatch(loadMeatsSuccess(meats));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadMeatsSuccess(meats) {
  return {type : types.LOAD_MEATS_SUCCESS, meats};
}
