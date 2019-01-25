import React from 'react';
import { images } from '../../constants';

const BuildingItem = ({ name, level }) => {
  return (
    <div>
      <img src={images.buildings[name]} alt={`${name} level ${level}`} />
      <div>
        <h2>{`${name}&#13;Level ${level}`}</h2>
      </div>
    </div>
  );
}

export default BuildingItem;