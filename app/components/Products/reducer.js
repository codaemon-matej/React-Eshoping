import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_ERROR } from './constants';

export const initialState = {
  items: [],
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
};

const reducer = function fetchProductsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        requesting: true,
        successful: false,
        messages: [{body: 'fetching categories...', time: new Date()}],
        errors: [],
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.categories,
        errors: [],
        messages: [{body: 'categories fetched successfuly!'}],
        requesting: false,
        successful: true,
      };
    case FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        items: {},
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      };
    default:
      return state;
  }
};

export default reducer;
