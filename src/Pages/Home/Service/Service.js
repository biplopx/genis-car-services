import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = id => {
    navigate(`/service/${id}`)
  }
  return (
    <div className='single-service'>
      <img src={img} alt="" />
      <h2>This service: {name}</h2>
      <p>Price: {price}</p>
      <p>{description}</p>
      <button onClick={() => navigateToServiceDetail(_id)}>Book: {name}</button>
    </div>
  );
};

export default Service;