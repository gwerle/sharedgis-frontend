import React from 'react';
import Select from '@material-ui/core/Select';
import { MenuItem, TextField } from '@material-ui/core';
import { booleanOptions } from '../../../config/constants';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { useStyles } from './styles';

interface TrainCrossFormProps {
  formValues: any;
  setFormValues(formValues: any): void;
}

export default function TrainCrossForm({
  formValues,
  setFormValues,
}: TrainCrossFormProps) {
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
          <InputLabel>Possui alerta visual</InputLabel>
          <Select
            value={formValues.haveVisualAlert}
            onChange={event => handleChangeSelect(event, 'haveVisualAlert')}
            label="Possui alerta visual"
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
          <InputLabel>Possui alerta sonoro</InputLabel>
          <Select
            value={formValues.haveSoundAlert}
            onChange={event => handleChangeSelect(event, 'haveSoundAlert')}
            label="Possui alerta sonoro"
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
          <InputLabel>Possui ampla visibilidade da linha férrea</InputLabel>
          <Select
            value={formValues.haveFarVisibilityOfTheTrainLine}
            onChange={event =>
              handleChangeSelect(event, 'haveFarVisibilityOfTheTrainLine')
            }
            label="Possui ampla visibilidade da linha férrea"
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
