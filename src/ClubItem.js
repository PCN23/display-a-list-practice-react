
import React from 'react';

export default function ClubItem({ name, year_started, stadium, current_manager, image }) {
  return (
    <div>
      <p>{name}</p>
      <p>{year_started}</p>
      <p>{stadium}</p>
      <p>{current_manager}</p>
      <img src={`${image}`} />
    </div>
  );
}
