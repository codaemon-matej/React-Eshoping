import { FETCH_PROFILE_REQUESTING, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_ERROR, UPDATE_PROFILE_REQUESTING, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_ERROR } from './constants';

export const fetchProfileRequest = function fetchProfileRequest() {
  return {
    type: FETCH_PROFILE_REQUESTING,
  };
};

export const fetchProfileSuccess = function fetchProfileSuccess(user) {
  return {
    type: FETCH_PROFILE_SUCCESS,
    user,
  };
};

export const fetchProfileError = function fetchProfileError (error, status) {
  return {
    type: FETCH_PROFILE_ERROR,
    error,
    status,
  };
};

export const updateProfileRequest = function updateProfileRequest(profile) {
  return {
    type: UPDATE_PROFILE_REQUESTING,
    profile
  };
};

export const updateProfileSuccess = function updateProfileSuccess() {
  return {
    type: UPDATE_PROFILE_SUCCESS,
  };
};

export const updateProfileError = function updateProfileError (error, status) {
  return {
    type: UPDATE_PROFILE_ERROR,
    error,
    status,
  };
};
