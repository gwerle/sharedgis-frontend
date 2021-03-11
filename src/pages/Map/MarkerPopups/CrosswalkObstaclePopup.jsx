import React from 'react';

export default function CrosswalkObstaclePopup({ data }) {
  return (
    <div>
      <div>Id: {data.id}</div>
      <div>Observações: {data.notes}</div>
    </div>
  );
}
