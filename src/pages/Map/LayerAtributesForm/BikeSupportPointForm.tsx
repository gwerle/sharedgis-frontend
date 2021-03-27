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

interface BikeSupportPointFormProps {
  formValues: any;
  setFormValues(formValues: any): void;
}

export default function BikeSupportPointForm({
  formValues,
  setFormValues,
}: BikeSupportPointFormProps) {
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
          <InputLabel>Possui bomba para encher pneu?</InputLabel>
          <Select
            value={formValues.havePumpTireBomb}
            onChange={event => handleChangeSelect(event, 'havePumpTireBomb')}
            label="Possui bomba para encher pneu?"
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
          <InputLabel>Possui comida para vender?</InputLabel>
          <Select
            value={formValues.haveFoodToSell}
            onChange={event => handleChangeSelect(event, 'haveFoodToSell')}
            label="Possui comida para vender?"
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
          <InputLabel>Possui peças de reposição de bicicleta?</InputLabel>
          <Select
            value={formValues.haveBikeSupportParts}
            onChange={event =>
              handleChangeSelect(event, 'haveBikeSupportParts')
            }
            label="Possui peças de reposição de bicicleta?"
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
