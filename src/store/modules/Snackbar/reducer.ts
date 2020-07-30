import { SnackbarActions, SnackbarStore } from './types';

const initialState: SnackbarStore = {
  visible: false,
  message: '',
  severity: 'success',
};

export default function snackbarReducer(
  state = initialState,
  action: SnackbarActions,
) {
  switch (action.type) {
    case '@SNACKBAR/HIDE':
      return {
        ...state,
        visible: false,
      };
    case '@SNACKBAR/SHOW':
      return {
        ...state,
        visible: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    default:
      return state;
  }
}
