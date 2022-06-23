import React from 'react';
import CarItem from './CandyItem';

export default function CarsList({ cars = [] }) {
  return (
    <div className='cars-list'>
      {
        cars.map((car, i) => <CarItem {...car}
          key={car.name + car.id + i}
        />)
      }
        
    </div>
  );
}
