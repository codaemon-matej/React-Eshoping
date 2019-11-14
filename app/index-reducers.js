/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import login from './containers/Login/reducer';
import client from './client/reducer';
import signup from './containers/Register/reducer';
import profile from './containers/Profile/reducer';
import products from './components/Products/reducer';
import allProducts from './containers/Products/reducer';
import cart from './containers/Cart/reducer';

export default combineReducers({
  form,
  login,
  client,
  signup,
  profile,
  products,
  allProducts,
  cart,
});
