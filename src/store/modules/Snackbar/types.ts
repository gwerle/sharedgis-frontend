export const SHOW_SNACKBAR = '@SNACKBAR/SHOW';
export const HIDE_SNACKBAR = '@SNACKBAR/HIDE';

export type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

export interface SnackbarStore {
  visible: boolean;
  message?: string;
  severity?: SnackbarSeverity;
}

interface ShowSnackbar {
  type: typeof SHOW_SNACKBAR;
  payload: { message: string; severity: SnackbarSeverity };
}

interface HideSnackbar {
  type: typeof HIDE_SNACKBAR;
}

export type SnackbarActions = ShowSnackbar | HideSnackbar;
