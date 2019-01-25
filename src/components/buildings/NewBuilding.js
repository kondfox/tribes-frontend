import React from 'react';

const NewBuilding = ({ newBuilding }) => {
  return (
    <div className="new-building">
      <img src={newBuilding.image} alt={`Add ${newBuilding.name}`} />
      <h2>{`Add ${newBuilding.name}`}</h2>
    </div>
  );
}

export default NewBuilding;