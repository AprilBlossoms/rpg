import React from 'react';
import SvgContainer from 'assets/SvgContainer';
import { Character } from 'store/battle/types/character';
import * as player from './player';
import enemy from './enemy';

type SpriteComponent = React.FC<{ character: Character }>;

export interface CharacterSpriteProps {
  size: number;
  character: Character;
}
export default function CharacterSprite({
  size,
  character
}: CharacterSpriteProps) {
  switch (character.type) {
    case 'NPC':
      const EnemyComponent = enemy[character.class];

      return (
        <SvgContainer size={size}>
          <EnemyComponent character={character} />
        </SvgContainer>
      );
    case 'PC':
      const PlayerComponent = player[character.class];

      return (
        <SvgContainer size={size}>
          <PlayerComponent character={character} />
        </SvgContainer>
      );
  }
}
