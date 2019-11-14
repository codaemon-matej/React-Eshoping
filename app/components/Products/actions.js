import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_ERROR } from './constants';

export const fetchCategoriesRequest = function fetchCategoriesRequest() {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  };
};

export const fetchCategoriesSuccess = function fetchCategoriesSuccess(categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories,
  };
};

export const fetchCategoriesError = function fetchCategoriesError(error, status) {
  return {
    type: FETCH_CATEGORIES_ERROR,
    error,
    status,
  };
};
