import React from 'react';
import TroopItem from './TroopItem';

const TroopList = ({ troops }) => {
  return (
    <div className="troop-list">
      {troops.map(troop => 
        <TroopItem key={troop.level} level={troop.level} count={troop.count} />
      )}
    </div>
  );
}

export default TroopList;