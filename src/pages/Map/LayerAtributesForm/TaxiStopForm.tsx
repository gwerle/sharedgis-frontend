import React from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useStyles } from './styles';
import { booleanOptions } from '../../../config/constants';

interface TaxiStopFormProps {
  formValues: any;
  setFormValues(formValues: any): void;
}

export default function TaxiStopForm({
  formValues,
  setFormValues,
}: TaxiStopFormProps) {
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
          <InputLabel>Possui bancos/cadeiras?</InputLabel>
          <Select
            value={formValues.haveSeats}
            onChange={event => handleChangeSelect(event, 'haveSeats')}
            label="Possui bancos/cadeiras?"
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
        <FormControl className={classes.selectFullWidth}>
          <InputLabel>Possui notificação visual?</InputLabel>
          <Select
            value={formValues.haveVisualNotification}
            onChange={event =>
              handleChangeSelect(event, 'haveVisualNotification')
            }
            label="Possui notificação visual?"
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
        <FormControl className={classes.selectFullWidth}>
          <InputLabel>Possui notificação sonora?</InputLabel>
          <Select
            value={formValues.haveSoundNotification}
            onChange={event =>
              handleChangeSelect(event, 'haveSoundNotification')
            }
            label="Possui notificação sonora?"
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
        <FormControl className={classes.selectFullWidth}>
          <InputLabel>Acessível para cadeirantes</InputLabel>
          <Select
            value={formValues.accessibleToWheelchair}
            onChange={event =>
              handleChangeSelect(event, 'accessibleToWheelchair')
            }
            label="Acessível para cadeirantes"
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
