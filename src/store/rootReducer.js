import { combineReducers } from 'redux';

import loginReducer from '../components/Login/store/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
