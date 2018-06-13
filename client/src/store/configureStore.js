import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
//connects our store to the rootReducer
//Thunk middleware will allow us to construct our action
//creators in a very special way?
//want any parent or container components to have access to the store.

export default function configureStore() {
  return createStore(
    rootReducer,
    window.devToolsExtension && window.devToolsExtension(),
    applyMiddleware(thunk)
  );
}
