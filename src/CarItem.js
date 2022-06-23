import React from 'react';

export default function CarItem({ name, type, year, image }) {
  return (
    <div className='car-item'>
      <p>{name}</p>
      <p>{type}</p>
      <p>{year}</p>
      <p>{image}</p>
        
    </div>
  );
}
