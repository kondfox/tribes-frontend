import React from 'react';
import NewBuilding from './NewBuilding';

const BuildingConstructor = ({ buildingConstructors }) => {
  return (
    <div className="building-list">
      {buildingConstructors.map(newBuilding => 
        <NewBuilding key={newBuilding}
        newBuilding={newBuilding} />
      )}
    </div>
  );
}

export default BuildingConstructor;