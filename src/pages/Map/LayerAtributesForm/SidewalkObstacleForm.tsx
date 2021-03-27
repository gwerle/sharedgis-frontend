import React from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from './styles';

interface SidewalkObstacleFormProps {
  formValues: any;
  setFormValues(formValues: any): void;
}

export default function SidewalkObstacleForm({
  formValues,
  setFormValues,
}: SidewalkObstacleFormProps) {
  const classes = useStyles();

  const handleChangeSelect = (
    event: React.ChangeEvent<{ value: unknown }>,
    form: string,
  ) => {
    setFormValues({
      ...formValues,
      [form]: event?.target?.value as string,
    });
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          label="Observações"
          value={formValues.notes}
          style={{ width: '100%' }}
          multiline
          rowsMax={4}
          onChange={event => handleChangeSelect(event, 'notes')}
        />
      </div>
    </form>
  );
}
