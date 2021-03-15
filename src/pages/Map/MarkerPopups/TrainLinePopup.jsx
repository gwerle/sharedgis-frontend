import React from 'react';
import DeleteComponent from './DeleteComponent';

export default function TrainLinePopup({ data }) {
  return (
    <div>
      <div>Id: {data.id}</div>
      <div>Observações: {data.notes}</div>
      <DeleteComponent url="trains" id={data.id} />
    </div>
  );
}
