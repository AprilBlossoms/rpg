import React from 'react';
import CharacterFace from 'assets/CharacterFace';
import { EnemySpriteProps } from './types';

export default function DefaultEnemy({ character }: EnemySpriteProps) {
  return <CharacterFace character={character} />;
}
