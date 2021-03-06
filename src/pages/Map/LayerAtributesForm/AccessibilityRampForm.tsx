import React from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useStyles } from './styles';
import {
  lowMediumHighOptions,
  booleanOptions,
} from '../../../config/constants';

interface AccessibilityRampProps {
  formValues: any;
  setFormValues(formValues: any): void;
}

export default function AccessibilityRamp({
  formValues,
  setFormValues,
}: AccessibilityRampProps) {
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
        <FormControl className={classes.selectFullWidth}>
          <InputLabel>Inclinação</InputLabel>
          <Select
            value={formValues.inclination}
            onChange={event => handleChangeSelect(event, 'inclination')}
            label="Inclinação"
          >
            <MenuItem value={''}>
              <em>Nenhum</em>
            </MenuItem>
            {lowMediumHighOptions.map(option => {
              return <MenuItem value={option.id}>{option.label}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.selectFullWidth}>
          <InputLabel>Possui notificação visual</InputLabel>
          <Select
            value={formValues.haveVisualNotification}
            onChange={event =>
              handleChangeSelect(event, 'haveVisualNotification')
            }
            label="Possui notificação visual"
          >
            <MenuItem value={null as any}>
              <em>Nenhum</em>
            </MenuItem>
            {booleanOptions.map(option => {
              return (
                <MenuItem value={option.id as any}>{option.label}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
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
