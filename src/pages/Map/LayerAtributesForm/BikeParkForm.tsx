import React from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useStyles } from './styles';
import { goodMediumBadOptions } from '../../../config/constants';

interface BikeParkFormProps {
  formValues: any;
  setFormValues(formValues: any): void;
}

export default function BikeParkForm({
  formValues,
  setFormValues,
}: BikeParkFormProps) {
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
        <FormControl className={classes.selectFullWidth}>
          <InputLabel>Condição dos Bicicletários</InputLabel>
          <Select
            value={formValues.bikeRacksCondition}
            onChange={event => handleChangeSelect(event, 'bikeRacksCondition')}
            label="Condição dos Bicicletários"
          >
            <MenuItem value={''}>
              <em>Nenhum</em>
            </MenuItem>
            {goodMediumBadOptions.map(option => {
              return <MenuItem value={option.id}>{option.label}</MenuItem>;
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
