import React from 'react';
import { PlayerCharacter } from './types';
import SvgContainer from 'assets/SvgContainer';

interface PlayerCharacterSpriteProps<TCharacter extends PlayerCharacter> {
  size: number;
  character: TCharacter;
}
export default function PlayerCharacterSprite<T extends PlayerCharacter>({
  size,
  character
}: PlayerCharacterSpriteProps<T>) {
  return (
    <SvgContainer size={size}>
      <character.sprite self={character} />
    </SvgContainer>
  );
}
