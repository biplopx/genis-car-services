import React from 'react';
import './Service.css';

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className='single-service'>
      <img src={img} alt="" />
      <h2>This service: {name}</h2>
      <p>Price: {price}</p>
      <p>{description}</p>
      <button>Book: {name}</button>
    </div>
  );
};

export default Service;