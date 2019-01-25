import React from 'react';

const BuildingItem = ({ building }) => {
  return (
    <div>
      <img src={building.image} alt={`${building.name} level ${building.level}`} />
      <div>
        <h2>{`${building.name}&#13;Level ${building.level}`}</h2>
      </div>
    </div>
  );
}

export default BuildingItem;