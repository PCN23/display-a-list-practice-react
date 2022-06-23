
import React from 'react';
import ClubItem from './ClubItem';

export default function ClubsList({ clubs = [] }) {
  return (
    <div>
      {
        clubs.map((club, i) => <ClubItem {...club}
          key={clubs.name + club.id + i}
        />)
      }
    </div>
  );
}
