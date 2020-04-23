import * as TYPES from './actionTypes';

export const setLogin = (login) => ({
  type: TYPES.SET_LOGIN,
  payload: login,
});
