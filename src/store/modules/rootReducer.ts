import { combineReducers } from 'redux';
import snackbarReducer from './Snackbar/reducer';

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
});

export default rootReducer;
