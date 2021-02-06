export const DEFAULT_ERROR_MESSAGE =
  'Ops! Ocorreu um erro por parte do servidor!';

export const mapLayers = [
  {
    id: 'roads',
    label: 'Via',
    geomType: 'line',
  },
  {
    id: 'trains',
    label: 'Via Férrea',
    geomType: 'line',
  },
  {
    id: 'train-cross',
    label: 'Cruzamento Férreo',
    geomType: 'point',
  },
  {
    id: 'bicycle-paths',
    label: 'Ciclovia',
    geomType: 'line',
  },
  {
    id: 'bike-parks',
    label: 'Estacionamento de Bicicletas',
    geomType: 'point',
  },
  {
    id: 'bike-support-points',
    label: 'Ponto de apoio ao ciclista',
    geomType: 'point',
  },
  {
    id: 'taxi-stops',
    label: 'Parada de Táxi',
    geomType: 'point',
  },
  {
    id: 'traffic-lights',
    label: 'Semáforo',
    geomType: 'point',
  },
  {
    id: 'accessibility-ramps',
    label: 'Rampa de Acessibilidade',
    geomType: 'point',
  },
  {
    id: 'sidewalks',
    label: 'Calçada',
    geomType: 'line',
  },
  {
    id: 'sidewalk-obstacles',
    label: 'Obstáculo na Calçada',
    geomType: 'point',
  },
  {
    id: 'bus-stops',
    label: 'Parada de Ônibus',
    geomType: 'point',
  },
];

export const wayOptions = [
  { id: 'ONE_WAY', label: 'Mão Única' },
  { id: 'BOTH_WAY', label: 'Mão Dupla' },
];

export const lowMediumHighOptions = [
  { id: 'LOW', label: 'Baixo' },
  { id: 'MEDIUM', label: 'Médio' },
  { id: 'HIGH', label: 'Alto' },
];

export const booleanOptions = [
  { id: true, label: 'Sim' },
  { id: false, label: 'Não' },
];

export const roadConditionOptions = [
  { id: 'EXCELENT', label: 'Excelente' },
  { id: 'GOOD', label: 'Bom' },
  { id: 'INTERMEDIATE', label: 'Intermediário' },
  { id: 'HORRIBLE', label: 'Horrível' },
];

export const surfaceSituationOptions = [
  { id: 'EXCELENT', label: 'Excelente' },
  { id: 'GOOD', label: 'Bom' },
  { id: 'INTERMEDIATE', label: 'Intermediário' },
  { id: 'BAD', label: 'Ruim' },
  { id: 'VERY_BAD', label: 'Muito Ruim' },
  { id: 'HORRIBLE', label: 'Horrível' },
  { id: 'VERY_HORRIBLE', label: 'Muito Horrível' },
  { id: 'IMPASSABLE', label: 'Não trafegável' },
];

export const bicyclePathOptions = [
  { id: 'CICLOVIA', label: 'Ciclovia' },
  { id: 'CICLORROTA', label: 'Ciclorrota' },
  { id: 'CICLOFAIXA', label: 'Ciclofaixa' },
  { id: 'COMPARTILHADA', label: 'Via compartilhada com pedestres' },
];

export const goodMediumBadOptions = [
  { id: 'GOOD', label: 'Bom' },
  { id: 'MEDIUM', label: 'Médio' },
  { id: 'BAD', label: 'Ruim' },
];

export const surfaceOptions = [
  { id: 'ASPHALT', label: 'Asfalto' },
  { id: 'CONCRETE', label: 'Concreto' },
  { id: 'SETT', label: 'Paralelepípedo' },
  { id: 'COMPACTED', label: 'Cascalho' },
  { id: 'GROUND', label: 'Chão batido' },
  { id: 'GRASS', label: 'Grama' },
];
