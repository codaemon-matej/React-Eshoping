import { call, put, takeLatest } from 'redux-saga/effects' ;
import { FETCH_CATEGORIES_REQUEST } from './constants';


import {
  fetchCategoriesSuccess,
  fetchCategoriesError,
} from './actions';

// TODO: If we not get property data on the request we should throw an error
function categoriesFetchApi() {
  return fetch('http://localhost:8000/categories', {
      method: 'GET',
    })
    .then(response => response.json())
    .catch((error) => { throw error })
}

function* categoriesFetchFlow() {
  try {
    const categories = yield call(categoriesFetchApi);
    console.log(categories);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesError(error, error.status));
  }
}

function* productsWatcher () {
  yield takeLatest(FETCH_CATEGORIES_REQUEST, categoriesFetchFlow);
}

export default productsWatcher
