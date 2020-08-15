import { findMatchingUser } from '../users';

export function login(username, password) {
  return function(dispatch) {
    const user = findMatchingUser(username, password);
    if (user) {
      dispatch(loginSuccess(user));
    }
  };
}

function loginSuccess(user) {
  return {
    type: "LOGIN_SUCCESS",
    user
  };
};