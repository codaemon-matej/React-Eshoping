import { take, call, put } from 'redux-saga/effects' ;
import { Cookies } from 'react-cookie';
import history from '../history';
import { getCookie } from '../utils/cookie';


import { setClient } from './actions';
import { CLIENT_SETTING, CLIENT_UNSET } from './constants';

import { ACCOUNT_API, REPORT_API } from '../utils/constants';

const cookie = new Cookies();

export function* setClientFlow({loggedinas, account, rootRequest}) {
  try {
    if (!account) {
      yield put(setClient(true, loggedinas, rootRequest));
    } else {
      yield put(setClient(true, loggedinas, rootRequest));
    }
    sessionStorage.setItem('account', account);
  } catch (error) {
    history.push('/login');
  }
}

export function* unsetClientFlow(){
  cookie.remove('loggedin');
  cookie.remove('loggedinas');
  sessionStorage.removeItem('account');
  history.push('/login');
}

function* clientWatcher() {
  while(true) {
    const action = yield take([CLIENT_SETTING, CLIENT_UNSET]);
    if (action.type === "CLIENT_SETTING") {
      yield call(setClientFlow, action);
    } else {
      yield call(unsetClientFlow);
    }
  }
}

export default clientWatcher;
