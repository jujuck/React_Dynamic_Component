import React from 'react';
import './Blue.css';

const Blue = ({ data }) => {
  console.log(data)
  return (
    <div className="container blue">
      <h1>{data.title}</h1>
      <h5>{data.description}</h5>
    </div>
  );
};

export default Blue;
