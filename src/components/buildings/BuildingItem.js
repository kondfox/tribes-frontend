import React from 'react';
import { images } from '../../constants';

const BuildingItem = ({ name, level }) => {
  return (
    <div className="building">
      <img className="building-image" src={images.buildings[name]} alt={`${name} level ${level}`} />
      <div className="building-info">
        <p>{name}</p>
        <p>{`Level ${level}`}</p>
      </div>
    </div>
  );
}

export default BuildingItem;