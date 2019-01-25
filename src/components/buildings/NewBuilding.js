import React from 'react';
import { images } from '../../constants';

const NewBuilding = ({ newBuilding }) => {
  return (
    <div className="building">
      <img className="building-image" src={images.buildings.add[newBuilding]} alt={`Add ${newBuilding}`} />
      <p>{`Add ${newBuilding}`}</p>
    </div>
  );
}

export default NewBuilding;