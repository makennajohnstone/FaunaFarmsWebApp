import {combineReducers} from 'redux';
import stuff from './stuffReducer';

const rootReducer = combineReducers({
  stuff
});
//const rootReducer = combineReducers({Prss, Errs, Cnvs, Msgs});

export default rootReducer;
