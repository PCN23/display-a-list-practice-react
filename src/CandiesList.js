
import React from 'react';
import CandyItem from './CandyItem';

export default function CandiesList({ candies = [] }) {
  return (
    <div className='candy-list'>
      {
        candies.map((candy, i) => <CandyItem {...candy}
          className='candy' key={candy.name + candy.id + i}
         

        />)
      }
    
    </div>
  );
}
