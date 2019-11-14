import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE, FILTER_PRODUCTS_BY_CATEGORY, COMPARE_PRODUCT } from './constants';

export const initialState = {
  items: [],
  filteredItems: [],
  products: [],
  compare: false,
  size: '',
  sort: '',
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
};

const reducer = function fetchProductsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        requesting: true,
        successful: false,
        messages: [{body: 'fetching products...', time: new Date()}],
        errors: [],
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.products,
        filteredItems: action.products,
        errors: [],
        messages: [{body: 'products fetched successfuly!'}],
        requesting: false,
        successful: true,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        items: {},
        filteredItems: {},
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      };
    case FILTER_PRODUCTS_BY_SIZE:
      return { 
        ...state,
        size: action.size,
        filteredItems: action.items,
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return { 
        ...state,
        sort: action.sort,
        filteredItems: action.items,
      };
    case FILTER_PRODUCTS_BY_CATEGORY:
      return { 
        ...state,
        type: action.type,
        filteredItems: action.items,
      };
    case COMPARE_PRODUCT:
      return {
        ...state,
        products: action.items,
      };
    default:
      return state;
  }
};

export default reducer;
