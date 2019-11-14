import { take, call, put, cancelled, fork } from 'redux-saga/effects';
import { Cookies } from 'react-cookie';
import history from '../../history';
import { unsetClient } from '../../client/actions';
import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_REQUESTING, LOGOUT_SUCCESS, LOGOUT_ERROR } from './constants';

const cookie = new Cookies();

function loginApi(email, password) {
  return (
    fetch(`http://localhost:8000/users/?email=${email}&password=${password}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .catch(error => { throw error })
  );
}

export function* loginFlow(email, password) {
  let account;
  try {
    account = yield call(loginApi, email, password);
    yield put({ type: LOGIN_SUCCESS });
    sessionStorage.setItem('account', JSON.stringify(account[0]));
    if (account[0].email === email) {
      cookie.set('loggedin', true);
      cookie.set('loggedinas', account.email); // eslint-disable-line no-restricted-globals
      history.push('/');
    } 
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error });
  } finally {
    if (yield cancelled()) {
      history.push('/login');
    }
  }
  return account[0];
}

export function* logoutFlow() {
  try {
    yield put(unsetClient());
    yield put({ type: LOGOUT_SUCCESS })
    history.push('/login');
  } catch (error) {
    yield put({ type: LOGOUT_ERROR });
  } finally {
    if (yield cancelled()) {
      history.push('/');
    }
  }
  return true;
}

// the watcher which will watch for any action
function* loginWatcher() {
  while (true) {
    const userLoadingAction = yield take([LOGIN_REQUESTING, LOGOUT_REQUESTING]);
    if (userLoadingAction.type === 'LOGIN_REQUESTING') {
      yield fork(loginFlow, userLoadingAction.email, userLoadingAction.password);
    } else if (userLoadingAction.type === 'LOGOUT_REQUESTING'){
      yield call(logoutFlow);
    }
  }
}

export default loginWatcher;
// Individual exports for testing
