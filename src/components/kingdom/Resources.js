import React from 'react';
import Resource from './Resource';

const Resources = ({ resources }) => {
  return (
    <div>
      {resources.map(resource => 
        <Resource resource={resource} />
      )}
    </div>
  );
}

export default Resources;