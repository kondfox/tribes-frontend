import React from 'react';
import BuildingItem from './BuildingItem';

const BuildingList = ({ buildings }) => {
  return (
    <div>
      {buildings.map(building => 
        <BuildingItem key={building.name} building={building} />
      )}
    </div>
  );
}

export default BuildingList;