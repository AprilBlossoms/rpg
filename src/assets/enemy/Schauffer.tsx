import React from 'react';
import { NonPlayerCharacter } from 'store/battle/types/character';
import CharacterFace from 'assets/CharacterFace';
import { EnemySpriteProps } from './types';

export default function DefaultEnemy({ character }: EnemySpriteProps) {
  return <CharacterFace character={character} />;
}
