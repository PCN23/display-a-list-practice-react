
import React from 'react';

export default function CandyItem({ name, type, cost, country }) {
  return (
    <div>
      <p>{name}</p>
      <p>{type}</p>
      <p>{cost}</p>
      <p>{country}</p>
    </div>
  );
}
