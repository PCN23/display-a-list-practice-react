
import React from 'react';

export default function PlayerItem({ name, country, last_club, first_club, year_retired, image }) {
  return (
    <div className='players'>
      <h1> Name: {name} </h1>
      <h3> Country: {country} </h3>
      <h2> {last_club} </h2>
      <h2> {first_club} </h2>
      <h2> Retired in:{year_retired} </h2>
      <img src={`${image}`}/>
    </div>
  );
}
