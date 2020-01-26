import React from 'react';
import {
  PlayerCharacter,
  NonPlayerCharacter
} from 'store/battle/types/character';

interface BattleProps {
  players: PlayerCharacter[];
  enemies: NonPlayerCharacter[];
}
export default function Battle({ players, enemies }: BattleProps) {
  return (
    <div>
      <h1>Players</h1>
      <ul>
        {players.map(p => (
          <li>{p.name}</li>
        ))}
      </ul>

      <h1>Enemies</h1>
      <ul>
        {enemies.map(e => (
          <li>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}
