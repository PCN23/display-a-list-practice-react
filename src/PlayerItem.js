
import React from 'react';

export default function PlayerItem({ name, country, last_club, first_club, year_retired, image }) {
  return (
    <div className='players'>
      <p>{name}</p>
      <p>{country}</p>
      <p>{last_club}</p>
      <p>{first_club}</p>
      <p>{year_retired}</p>
      <img src={`${image}`}/>
    </div>
  );
}
