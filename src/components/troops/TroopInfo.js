import React from 'react';
import { images } from '../../constants';
import TroopInfoStat from './TroopInfoStat';

const TroopInfo = ({ stats }) => {
  return (
    <div className="troop-info">
      <img src={images.troop} alt="Troop info" />
      <div className="troop-stats">
        {Object.entries(stats).map(stat => 
          <TroopInfoStat key={stat[0]} statName={stat[0]} value={stat[1]} />
        )}
      </div>
    </div>
  );
}

export default TroopInfo;