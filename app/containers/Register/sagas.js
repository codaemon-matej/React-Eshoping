import { take, call, put, cancelled, fork } from 'redux-saga/effects';
import history from '../../history';
import { Cookies } from 'react-cookie';
import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';

const cookie = new Cookies();

function signupApi(emailId, pwd) {
  const formattedUserData = {
    email: emailId,
    password: pwd,
  }
  return (
    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedUserData),
    })
      .then(response => response.json())
      .catch(error => { throw error })
  );
}

export function* signupFlow(email, password) {
  let account;
  try {
    account = yield call(signupApi, email, password);
    yield put({ type: SIGNUP_SUCCESS });
    sessionStorage.setItem('account', JSON.stringify(account));
    cookie.set('loggedin', true);
    cookie.set('loggedinas', account.email); // eslint-disable-line no-restricted-globals
    history.push('/'); 
  } catch (error) {
    yield put({ type: SIGNUP_ERROR, error });
  } finally {
    if (yield cancelled()) {
      history.push('/login');
    }
  }
  return account;
}

// the watcher which will watch for any action
function* signupWatcher() {
  while (true) {
    const userLoadingAction = yield take([SIGNUP_REQUESTING]);
    if (userLoadingAction.type === 'SIGNUP_REQUESTING') {
      yield fork(signupFlow, userLoadingAction.email, userLoadingAction.password);
    }
  }
}

export default signupWatcher;
// Individual exports for testing
