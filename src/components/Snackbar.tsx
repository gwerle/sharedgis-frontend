import React from 'react';
import { Snackbar as MuiSnackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useSelector, useDispatch } from '../store';
import { hideSnackbar } from '../store/modules/Snackbar/actions';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Snackbar() {
  const classes = useStyles();
  const snackbarStore = useSelector(state => state.snackbar);
  const dispatch = useDispatch();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(hideSnackbar());
  };

  return (
    <div className={classes.root}>
      <MuiSnackbar
        open={snackbarStore.visible}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackbarStore.severity}>
          {snackbarStore.message}
        </Alert>
      </MuiSnackbar>
    </div>
  );
}
