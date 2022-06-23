
import React from 'react';

export default function CandyItem({ name, type, cost, country, image }) {
  return (
    <div className='candy-items'>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <p>{cost}</p>
      <h6>{country}</h6>
      <img src={`${image}`}/>
    </div>
  );
}
