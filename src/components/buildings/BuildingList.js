import React from 'react';
import BuildingItem from './BuildingItem';

const BuildingList = ({ buildings }) => {
  return (
    <div className="building-list">
      {buildings.map(building => 
        <BuildingItem key={building.name}
          name={building.name}
          level={building.level}
        />
      )}
    </div>
  );
}

export default BuildingList;