import React from 'react';

const Resource = ({ resource }) => {
  return (
    <div className="resource">
      <div className="resource-image">
        <img src={resource.generatorImage} alt={resource.name} />
      </div>      
      <div className="resource-info">
        <div>
          <span>{resource.value}</span>
          <img src={resource.image} alt={resource.name}/>
        </div>
        <div>
          {`${resource.generation} /minute`}
        </div>
      </div>
    </div>
  );
}

export default Resource;