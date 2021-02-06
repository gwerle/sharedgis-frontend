import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import {
  wayOptions,
  lowMediumHighOptions,
  booleanOptions,
  roadConditionOptions,
} from '../../../config/constants';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { useStyles } from './styles';

interface RoadsFormProps {
  formValues: any;
  setFormValues(formValues: any): void;
}

export default function RoadsForm({
  formValues,
  setFormValues,
}: RoadsFormProps) {
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
        <TextField
          label="Nome"
          value={formValues.name}
          onChange={event => handleChangeSelect(event, 'name')}
        />

        <FormControl className={classes.select}>
          <InputLabel>Sentido da Via</InputLabel>
          <Select
            value={formValues.way}
            onChange={event => handleChangeSelect(event, 'way')}
            label="Sentido"
          >
            <MenuItem value="">
              <em>Nenhum</em>
            </MenuItem>
            {wayOptions.map(wayOption => {
              return (
                <MenuItem value={wayOption.id}>{wayOption.label}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.select}>
          <InputLabel>Inclinação da Via</InputLabel>
          <Select
            value={formValues.slope}
            onChange={event => handleChangeSelect(event, 'slope')}
            label="Inclinação da Via"
          >
            <MenuItem value="">
              <em>Nenhum</em>
            </MenuItem>
            {lowMediumHighOptions.map(option => {
              return <MenuItem value={option.id}>{option.label}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl className={classes.select}>
          <InputLabel>Pavimentado</InputLabel>
          <Select
            value={formValues.paved}
            onChange={event => handleChangeSelect(event, 'paved')}
            label="Pavimentado"
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
          <InputLabel>Condição da Via</InputLabel>
          <Select
            value={formValues.roadCondition}
            onChange={event => handleChangeSelect(event, 'roadCondition')}
            label="Condição da Via"
          >
            <MenuItem value="">
              <em>Nenhum</em>
            </MenuItem>
            {roadConditionOptions.map(option => {
              return <MenuItem value={option.id}>{option.label}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl className={classes.select}>
          <InputLabel>Tem Transporte Público</InputLabel>
          <Select
            value={formValues.havePublicTransportation}
            onChange={event =>
              handleChangeSelect(event, 'havePublicTransportation')
            }
            label="Tem Transporte Público"
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
