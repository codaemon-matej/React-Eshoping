import { ADD_TO_CART, REMOVE_FROM_CART } from './constants';

export const initialState = {
  items: [],
};

const reducer = function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: action.items,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
};

export default reducer;
