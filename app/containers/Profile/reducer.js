import { FETCH_PROFILE_REQUESTING, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_ERROR, UPDATE_PROFILE_REQUESTING, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_ERROR } from './constants';

export const initialState = {
  requesting: false,
  user: [],
  successful: false,
  messages: [],
  errors: [],
};

const reducer = function fetchProfileReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROFILE_REQUESTING:
      return {
        requesting: true,
        successful: false,
        messages: [{body: 'Fetching profile...', time: new Date()}],
        errors: [],
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        user: action.user,
        errors: [],
        messages: [],
        requesting: false,
        successful: true,
      };
    case FETCH_PROFILE_ERROR:
      return {
        user: [],
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      };
    case UPDATE_PROFILE_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
        messages: [{
          body: `Profile being updated`,
          time: new Date(),
        }],
        errors: [],
      }
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true,
        messages: [{
          body: `Profile updated`,
          time: new Date(),
        }],
        errors: [],
      }
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        requesting: false,
        successful: false,
        messages: [],
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
      }
    default:
      return state;
  }
};

export default reducer;
