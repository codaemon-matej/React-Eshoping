import { settingClient } from '../client/actions'
import { getCookie } from '../utils/cookie';

export function checkIndexAuthorization ({dispatch, getState}, rootRequest) {
  // attempt to grab the token from sessionStorage.  Changing this from localStorage to sessionStorage
  // because these responses should not persist longer than the current session. -Perry
  const loggedInCookie = getCookie('loggedin');
  const loggedInAsCookie = getCookie('loggedinas');
  const account = sessionStorage.getItem('account');

  if (loggedInCookie !== '' && loggedInAsCookie !== '') {
    const { client } = getState();
    // otherwise, dispatch the token to our setClient action
    // which will update our redux state with the token and return true
    if (!client || !client.loggedin ) {
      dispatch(settingClient(loggedInCookie, loggedInAsCookie, account, rootRequest));
    }
    return true;
  }

  return false;
}
