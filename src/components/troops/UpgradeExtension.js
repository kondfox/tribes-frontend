import React from 'react';
import { images } from '../../constants';

const UpgradeExtension = ({ cost }) => {
  return (
    <div className="upgrade-extension shadow">
      <div>upgrade</div>
      <div>
        <span>{cost}</span>
        <img className="small-icon" src={images.resources.gold} />
      </div>
    </div>
  );
}

export default UpgradeExtension;