import React from 'react';
import { images } from '../../constants';

const Resource = ({ name, value, generation }) => {
  return (
    <div className="resource">
      <div className="resource-provider">
        <span class="helper"></span>
        <img className="resource-provider-image" src={images.resources[`${name}Provider`]} alt={name} />
      </div>      
      <div className="resource-info">
        <div>
          <span class="resource-value helper">{value}</span>
          <img className="small-icon" src={images.resources[name]} alt={name}/>
        </div>
        <div>
          {`${generation} / min`}
        </div>
      </div>
    </div>
  );
}

export default Resource;