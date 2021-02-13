import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { mapLayers } from '../../config/constants';
import {
  RoadsForm,
  TrainCrossForm,
  TrainLineForm,
  BicyclePathForm,
  BikeParkForm,
  BikeSupportPointForm,
  TaxiStopForm,
  TrafficLightForm,
  SidewalkForm,
  SidewalkObstacleForm,
  BusStopForm,
} from './LayerAtributesForm';
import AccessibilityRamp from './LayerAtributesForm/AccessibilityRampForm';

interface SelectAtributesModalProps {
  isOpen: boolean;
  setOpen(isOpen: boolean): void;
  handleSubmitForm(): void;
  formValues: any;
  setFormValues(formValues: any): void;
  mapLayer: string;
  setMapLayer(mapLayer: string): void;
  spacialFeatureType: 'point' | 'line';
  handleCloseAtributesModal(): void;
}

export default function SelectAtributesModal({
  isOpen,
  setOpen,
  handleSubmitForm,
  formValues,
  setFormValues,
  mapLayer,
  setMapLayer,
  spacialFeatureType,
  handleCloseAtributesModal,
}: SelectAtributesModalProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMapLayer(event.target.value as string);
  };

  const getLayerForm = () => {
    switch (mapLayer) {
      case 'roads':
        return (
          <RoadsForm formValues={formValues} setFormValues={setFormValues} />
        );
      case 'trains':
        return (
          <TrainLineForm
            formValues={formValues}
            setFormValues={setFormValues}
          />
        );
      case 'train-cross':
        return (
          <TrainCrossForm
            formValues={formValues}
            setFormValues={setFormValues}
          />
        );
      case 'bicycle-paths':
        return (
          <BicyclePathForm
            formValues={formValues}
            setFormValues={setFormValues}
          />
        );

      case 'bike-parks':
        return (
          <BikeParkForm formValues={formValues} setFormValues={setFormValues} />
        );

      case 'bike-support-points':
        return (
          <BikeSupportPointForm
            formValues={formValues}
            setFormValues={setFormValues}
          />
        );

      case 'taxi-stops':
        return (
          <TaxiStopForm formValues={formValues} setFormValues={setFormValues} />
        );

      case 'traffic-lights':
        return (
          <TrafficLightForm
            formValues={formValues}
            setFormValues={setFormValues}
          />
        );

      case 'accessibility-ramps':
        return (
          <AccessibilityRamp
            formValues={formValues}
            setFormValues={setFormValues}
          />
        );

      case 'sidewalks':
        return (
          <SidewalkForm formValues={formValues} setFormValues={setFormValues} />
        );

      case 'sidewalk-obstacles':
        return (
          <SidewalkObstacleForm
            formValues={formValues}
            setFormValues={setFormValues}
          />
        );

      case 'bus-stops':
        return (
          <BusStopForm formValues={formValues} setFormValues={setFormValues} />
        );
      default:
        break;
    }
  };

  const mapLayersBySpacialFeatureType = mapLayers.filter(
    layer => layer.geomType === spacialFeatureType,
  );

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={handleCloseAtributesModal}
      >
        <DialogTitle style={{ minWidth: '500px' }}>
          {'Criar novo Ponto'}
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth variant="outlined">
            <InputLabel>O que está mapeando?</InputLabel>
            <Select
              value={mapLayer}
              onChange={handleChangeSelect}
              label="O que está mapeando?"
              fullWidth
            >
              {mapLayersBySpacialFeatureType.map(layer => {
                return <MenuItem value={layer.id}>{layer.label}</MenuItem>;
              })}
            </Select>
          </FormControl>
          {getLayerForm()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAtributesModal} color="primary">
            Cancelar
          </Button>
          <Button
            variant="contained"
            disabled={!mapLayer}
            onClick={handleSubmitForm}
            color="primary"
            style={{ color: '#FFF' }}
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
