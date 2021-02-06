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
  surfaceOptions,
  booleanOptions,
  goodMediumBadOptions,
} from '../../../config/constants';

interface SidewalkFormProps {
  formValues: any;
  setFormValues(formValues: any): void;
}

export default function SidewalkForm({
  formValues,
  setFormValues,
}: SidewalkFormProps) {
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
          <InputLabel>Cobertura do Terreno</InputLabel>
          <Select
            value={formValues.surface}
            onChange={event => handleChangeSelect(event, 'surface')}
            label="Cobertura do Terreno"
          >
            <MenuItem value={null as any}>
              <em>Nenhum</em>
            </MenuItem>
            {surfaceOptions.map(option => {
              return (
                <MenuItem value={option.id as any}>{option.label}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.selectFullWidth}>
          <InputLabel>Situação do Terreno</InputLabel>
          <Select
            value={formValues.surfaceSituation}
            onChange={event => handleChangeSelect(event, 'surfaceSituation')}
            label="Situação do Terreno"
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
        <TextField
          label="Largura"
          value={formValues.width}
          type={'number'}
          onChange={event => handleChangeSelect(event, 'width')}
        />
        <FormControl className={classes.select}>
          <InputLabel>Possui pavimento tátil</InputLabel>
          <Select
            value={formValues.haveTacticlePaving}
            onChange={event => handleChangeSelect(event, 'haveTacticlePaving')}
            label="Possui pavimento tátil"
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
          <InputLabel>Pavimento tátil com contraste</InputLabel>
          <Select
            value={formValues.haveContrastedTacticlePaving}
            onChange={event =>
              handleChangeSelect(event, 'haveContrastedTacticlePaving')
            }
            label="Pavimento tátil com contraste"
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
        <TextField
          label="Cor do Pavimento Tátil"
          value={formValues.tactilePavingColor}
          onChange={event => handleChangeSelect(event, 'tactilePavingColor')}
        />
      </div>
      <div>
        <FormControl className={classes.selectFullWidth}>
          <InputLabel>Situação do Pavimento tátil</InputLabel>
          <Select
            value={formValues.haveContrastedTacticlePaving}
            onChange={event =>
              handleChangeSelect(event, 'tacticlePavingSituation')
            }
            label="Situação do Pavimento tátil"
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
