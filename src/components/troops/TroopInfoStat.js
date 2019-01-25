import React from 'react';
import { images } from '../../constants';

const TroopInfoStat = ({ statName, value }) => {
  return (
    <div className="troop-info-stat">
      <span>{`${statName}: ${value}`}</span>
      <img src={images[statName]} alt={`${statName}: ${value}`}/>
    </div>
  );
}

export default TroopInfoStat;