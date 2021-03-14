import React from 'react';
import DeleteComponent from './DeleteComponent';

export default function CrosswalkObstaclePopup({ data }) {
  return (
    <div>
      <div>Id: {data.id}</div>
      <div>Observações: {data.notes}</div>
      <DeleteComponent url="sidewalk-obstacles" id={data.id} />
    </div>
  );
}
