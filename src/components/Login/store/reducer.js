import initialState from './initialState';
import * as TYPES from './actionTypes';

export default function loginReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.CREATE_USER_SESSION:
      return Object.assign({}, state, {
        email: payload.user.email,
      });

    default:
      return state;
  }
}
