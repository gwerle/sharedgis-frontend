import { combineReducers } from 'redux';
import snackbarReducer from './Snackbar/reducer';
import mapReducer from './Map/reducer';

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  map: mapReducer,
});

export default rootReducer;
