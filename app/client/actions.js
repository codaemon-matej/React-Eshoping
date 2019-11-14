import { CLIENT_SETTING, CLIENT_SET, CLIENT_UNSET } from './constants';

export function settingClient(loggedin, loggedinas, account, rootRequest) {
  return {
    type: CLIENT_SETTING,
    loggedin,
    loggedinas,
    account,
    rootRequest,
  };
}
export function setClient(loggedin, loggedinas, account, rootRequest) {
  return {
    type: CLIENT_SET,
    loggedin,
    loggedinas,
    account,
    rootRequest,
  };
}

export function unsetClient() {
  return {
    type: CLIENT_UNSET,
  };
}
