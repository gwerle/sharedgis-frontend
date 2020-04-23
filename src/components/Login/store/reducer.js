import initialState from './initialState';
import * as TYPES from './actionTypes';

export default function loginReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.SET_LOGIN:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}
