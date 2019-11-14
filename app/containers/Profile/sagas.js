import { take, call, put, cancelled, fork } from 'redux-saga/effects';
import history from '../../history';
import { FETCH_PROFILE_REQUESTING, UPDATE_PROFILE_REQUESTING } from './constants';

import {
  fetchProfileSuccess,
  fetchProfileError,
  profileUpdateSuccess,
  profileUpdateError,

} from './actions';

function fetchProfileApi(id) {
  return (
    fetch(`http://localhost:8000/users/${id}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .catch(error => { throw error })
  );
}

function profileUpdateApi (id, profile) {
  const formattedProfileData = {
    first_name: profile.first_name,
    last_name: profile.last_name,
    email: profile.email,
    password: profile.password,
    username: profile.username,
  }
  return fetch(`http://localhost:8000/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formattedProfileData),
  })
  .then(response => response.json())
  .catch(error => { throw error })
}

function* fetchProfileFlow() {
  try {
    const user = JSON.parse(sessionStorage.getItem('account'));

    const profile = yield call(fetchProfileApi, user.id);
    yield put(fetchProfileSuccess(profile));
  } catch (error) {
    yield put(fetchProfileError(error, error.status));
  }
}

function* updateProfileFlow(action) {
  try {
    const user = JSON.parse(sessionStorage.getItem('account'));
    const { profile } = action;
    const result = yield call(profileUpdateApi, user.id, profile);
    yield put(profileUpdateSuccess());
  } catch (error) {
    yield put(profileUpdateError(error))
  }
}

function* fetchProfileWatcher () {
  while (true) {
    const userLoadingAction = yield take([FETCH_PROFILE_REQUESTING, UPDATE_PROFILE_REQUESTING]);
    if (userLoadingAction.type === 'FETCH_PROFILE_REQUESTING') {
      yield fork(fetchProfileFlow);
    } else if (userLoadingAction.type === 'UPDATE_PROFILE_REQUESTING'){
      yield call(updateProfileFlow, userLoadingAction);
    }
  }
}

export default fetchProfileWatcher;
// Individual exports for testing
