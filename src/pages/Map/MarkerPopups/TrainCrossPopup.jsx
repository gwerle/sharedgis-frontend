import React from 'react';
import { formatBoolean } from '../../../utils/enumUtils';
import DeleteComponent from './DeleteComponent';

export default function TrainCrossPopup({ data }) {
  return (
    <div>
      <div>Id: {data.id}</div>
      <div>Possui Alerta Visual: {formatBoolean(data.have_visual_alert)}</div>
      <div>Possui Alerta Sonoro: {formatBoolean(data.have_sound_alert)}</div>
      <div>
        Possui ampla visibilidade da linha férrea:{' '}
        {formatBoolean(data.have_far_visibility_of_the_train_line)}
      </div>
      <div>Observações: {data.notes}</div>
      <DeleteComponent url="train-cross" id={data.id} />
    </div>
  );
}
