import * as rest from '../../Common/api/api';
import * as actions from './actions';

export const loginUser = (user) => {
  return (dispatch) => {
    rest.createSession(user).then((resp) => {
      dispatch(actions.createUserSession(resp.data));
    });
  };
};
