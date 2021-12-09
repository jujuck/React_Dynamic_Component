import React from 'react';
import './Red.css';

const Red = ({ data }) => {
  return (
    <div className="container red">
      <h1>{data.title}</h1>
      <h5>{data.description}</h5>
    </div>
  );
};

export default Red;
