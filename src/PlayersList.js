
import React from 'react';
import PlayerItem from './PlayerItem';

export default function PlayersList({ players = [] }) {
  return (
    <div className='players-list'>PlayersList
      {
        players.map((player, i) => <PlayerItem {...player}
          lassName='player' key={player.name + player.id + i}
        />)
      }

    </div>
  );
}
