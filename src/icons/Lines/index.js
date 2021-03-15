const sidwalkIcon = {
  color: 'black',
  dashArray: '20, 15',
  lineJoin: 'round',
};

const roadsIcon = {
  color: 'black',
};

const trainsIcon = {
  color: 'red',
  dashArray: '20, 15',
  lineJoin: 'round',
};

const bicyclePathsIcon = {
  color: 'blue',
  dashArray: '20, 15',
  lineJoin: 'round',
};

const newLineIcon = {
  color: 'green',
  opacity: 0.5
};

export const getLineIcon = (id) => {
  switch (id) {
    case 'roads':
      return roadsIcon;
    case 'sidewalks':
      return sidwalkIcon;
    case 'trains':
      return trainsIcon;
    case 'bicyclePaths':
      return bicyclePathsIcon;
    case 'newLine':
      return newLineIcon
    default:
      return bicyclePathsIcon;
  }
}
