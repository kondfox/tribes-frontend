import React from 'react';
import { images } from '../../constants';

const Resource = ({ name, value, generation }) => {
  return (
    <div className="resource">
      <div className="resource-image">
        <img src={images.resources[`${name}Provider`]} alt={name} />
      </div>      
      <div className="resource-info">
        <div>
          <span>{value}</span>
          <img src={images.resources[name]} alt={name}/>
        </div>
        <div>
          {`${generation} /minute`}
        </div>
      </div>
    </div>
  );
}

export default Resource;