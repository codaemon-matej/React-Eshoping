import { CLIENT_SETTING, CLIENT_SET, CLIENT_UNSET } from './constants';

const initialState = {
  account: null,
  accountDetails: {},
  loggedin: false,
  loggedinas: null,
  rootRequest: false,
};

const accountDetails = (accountString) => {
  const { account } = JSON.parse(accountString);
  const userInfo = account.user_info || {};
  const details = {
    email: userInfo.email ? userInfo.email : '',
    password: '',
  };
  return details;
}

const reducer = function clientReducer (state = initialState, action) {
  switch(action.type) {
    case CLIENT_SETTING:
      return {
        account: action.account,
        accountDetails: {},
        loggedin: action.loggedin,
        loggedinas: action.loggedinas,
        rootRequest: action.rootRequest,
      };
    case CLIENT_SET:
      return {
        account: action.account,
        accountDetails: accountDetails(action.account),
        loggedin: action.loggedin,
        loggedinas: action.loggedinas,
        rootRequest: action.rootRequest,
      };
    case CLIENT_UNSET:
      return {
        account: null,
        accountDetails: {},
        loggedin: false,
        loggedinas: null,
        rootRequest: false,
      };
    default:
      return state;
  }
};

export default reducer;
