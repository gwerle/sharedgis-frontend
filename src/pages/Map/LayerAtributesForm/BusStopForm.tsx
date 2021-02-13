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

interface BusStopFormProps {
  formValues: any;
  setFormValues(formValues: any): void;
}

export default function BusStopForm({
  formValues,
  setFormValues,
}: BusStopFormProps) {
  const classes = useStyles();

  const handleChangeSelect = (
    event: React.ChangeEvent<{ value: unknown }>,
    form: string,
  ) => {
    setFormValues((state: any) => {
      return {
        ...state,
        [form]: event?.target?.value as string,
      };
    });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <FormControl className={classes.select}>
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
        <FormControl className={classes.select}>
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
        <FormControl className={classes.select}>
          <InputLabel>Possui notificação sonora</InputLabel>
          <Select
            value={formValues.haveSoundNotification}
            onChange={event =>
              handleChangeSelect(event, 'haveSoundNotification')
            }
            label="Possui notificação sonora"
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
        <FormControl className={classes.select}>
          <InputLabel>Possui cobertura contra chuva?</InputLabel>
          <Select
            value={formValues.rainCovered}
            onChange={event => handleChangeSelect(event, 'rainCovered')}
            label="Possui cobertura contra chuva?"
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
        <FormControl className={classes.select}>
          <InputLabel>Possui indicação de linhas de ônibus</InputLabel>
          <Select
            value={formValues.haveBusLinesDemonstrations}
            onChange={event =>
              handleChangeSelect(event, 'haveBusLinesDemonstrations')
            }
            label="Possui indicação de linhas de ônibus"
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
        <FormControl className={classes.select}>
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
