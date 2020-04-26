import * as TYPES from './actionTypes';

export const createUserSession = (user) => ({
  type: TYPES.CREATE_USER_SESSION,
  payload: { user },
});
