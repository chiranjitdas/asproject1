import { combineReducers } from 'redux';
import products from './reducers/main/products';
import common from './reducers/main/common';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  products,
  common,
  router: routerReducer
});