import React from 'react';
import './Green.css';

const Green = ({ data }) => {
  return (
    <div className="container green">
      <h1>{data.title}</h1>
      <h5>{data.description}</h5>
    </div>
  );
};

export default Green;
