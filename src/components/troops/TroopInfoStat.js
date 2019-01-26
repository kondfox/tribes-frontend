import React from 'react';
import { images } from '../../constants';

const TroopInfoStat = ({ statName, value }) => {
  return (
    <div className="troop-info-stat">
      <span>{`${statName}: ${value}`}</span>
      <img className="small-icon" src={images.troops.stats[statName]} alt={`${statName}: ${value}`}/>
    </div>
  );
}

export default TroopInfoStat;