import React from 'react';
import { images } from '../../constants';

const TroopItem = ({ level, count }) => {
  return (
    <div className="troop-item">
      <img src={images.troops.troop} alt={`${count} Troop level ${level}`} />
      <span>
        {`${count} Troop level ${level}`}
      </span>
    </div>
  );
}

export default TroopItem;