import { call, put, takeLatest } from 'redux-saga/effects' ;
import { FETCH_PRODUCTS_REQUEST } from './constants';


import {
  fetchProductsSuccess,
  fetchProductsError,
} from './actions';

// TODO: If we not get property data on the request we should throw an error
function productsFetchApi() {
  return fetch('http://localhost:8000/products', {
      method: 'GET',
    })
    .then(response => response.json())
    .catch((error) => { throw error })
}

function* productsFetchFlow() {
  try {
    const products = yield call(productsFetchApi);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsError(error, error.status));
  }
}

function* productsWatcher () {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, productsFetchFlow);
}

export default productsWatcher
