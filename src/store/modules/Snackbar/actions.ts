import { SnackbarActions, SnackbarSeverity } from './types';
import { SHOW_SNACKBAR, HIDE_SNACKBAR } from './types';

export const hideSnackbar = (): SnackbarActions => ({
  type: HIDE_SNACKBAR,
});

export const showSnackbar = (
  message: string,
  severity: SnackbarSeverity = 'success',
): SnackbarActions => ({
  type: SHOW_SNACKBAR,
  payload: { message, severity },
});
