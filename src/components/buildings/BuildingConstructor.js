import React from 'react';
import NewBuilding from './NewBuilding';

const BuildingConstructor = ({ buildingConstructors }) => {
  return (
    <div className="building-constructors">
      {buildingConstructors.map(newBuilding => 
        <NewBuilding key={newBuilding.name} newBuilding={newBuilding} />
      )}
    </div>
  );
}

export default BuildingConstructor;