import React from 'react';
import { images } from '../../constants';

const NewBuilding = ({ newBuilding }) => {
  return (
    <div className="new-building">
      <img src={images.buildings[newBuilding.name]} alt={`Add ${newBuilding.name}`} />
      <h2>{`Add ${newBuilding.name}`}</h2>
    </div>
  );
}

export default NewBuilding;