import React from 'react';
import {
  PlayerCharacter,
  NonPlayerCharacter
} from 'store/battle/types/character';
import CharacterSprite from 'assets/CharacterSprite';

interface BattleProps {
  players: PlayerCharacter[];
  enemies: NonPlayerCharacter[];
}
export default function Battle({ players, enemies }: BattleProps) {
  const spriteSize = 145;

  return (
    <div style={{ clear: 'both' }}>
      <div style={{ padding: 0, margin: 0, float: 'left' }}>
        {players.map(player => (
          <div>
            <CharacterSprite character={player} size={spriteSize} />
            <div style={{ textAlign: 'center' }}>{player.name}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: 0, margin: 0, float: 'right' }}>
        {enemies.map(enemy => (
          <div>
            <CharacterSprite character={enemy} size={spriteSize} />
            <div style={{ textAlign: 'center' }}>{enemy.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
