import React from 'react';
import TroopCard from './TroopCard';
import UpgradeExtension from './UpgradeExtension';

const TroopItem = ({ level, count }) => {
  return (
    <div className="troop-item">
      <TroopCard level={level} count={count} />
      <UpgradeExtension cost={100} />
    </div>
  );
}

export default TroopItem;