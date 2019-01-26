import React from 'react';
import { images } from '../../constants';

const TroopCard = ({ level, count }) => {
  return (
    <div className="troop-card shadow">
      <img className="round-icon" src={images.troops.troop} alt={`${count} Troop level ${level}`} />
      <span className="troop-text">
        {`${count} Troop level ${level}`}
      </span>
    </div>
  );
}

export default TroopCard;