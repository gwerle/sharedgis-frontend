import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '45%',
      },
    },
    select: {
      margin: theme.spacing(1),
      width: '45%',
    },
    selectFullWidth: {
      margin: theme.spacing(1),
      width: '100%',
    },
  }),
);
