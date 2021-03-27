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
  surfaceSituationOptions,
  bicyclePathOptions,
} from '../../../config/constants';

interface BicyclePathFormProps {
  formValues: any;
  setFormValues(formValues: any): void;
}

export default function BicyclePathForm({
  formValues,
  setFormValues,
}: BicyclePathFormProps) {
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
          <InputLabel>Situação da Ciclovia</InputLabel>
          <Select
            value={formValues.surfaceSituation}
            onChange={event => handleChangeSelect(event, 'surfaceSituation')}
            label="Situação da Ciclovia"
          >
            <MenuItem value={null as any}>
              <em>Nenhum</em>
            </MenuItem>
            {surfaceSituationOptions.map(option => {
              return (
                <MenuItem value={option.id as any}>{option.label}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.selectFullWidth}>
          <InputLabel>Tipo de Ciclovia</InputLabel>
          <Select
            value={formValues.bicyclePathType}
            onChange={event => handleChangeSelect(event, 'bicyclePathType')}
            label="Tipo de Ciclovia"
          >
            <MenuItem value={null as any}>
              <em>Nenhum</em>
            </MenuItem>
            {bicyclePathOptions.map(option => {
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
