import React from 'react';
import Resource from './Resource';

const Resources = ({ resources }) => {
  return (
    <div className="resources box">
      {resources.map(resource => 
        <Resource key={resource.name} 
          name={resource.name}
          value={resource.value}
          generation={resource.generation}
        />
      )}
    </div>
  );
}

export default Resources;