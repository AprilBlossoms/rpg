import React from 'react';
import { Character, Action, CharacterType } from 'logic/types';

export type TargetType = CharacterType | 'ALL';

export interface SpriteProps {
  self: PlayerCharacter;
}

export interface ActionOption {
  name: string;
  action: () => Action;
  getValidTargets: (characters: Character[]) => Character[];
}

export interface PlayerCharacter extends Character {
  type: 'PC';
  actionOptions: ActionOption[];
  sprite: React.FC<SpriteProps>;
}

export interface NonPlayerCharacter extends Character {
  type: 'NPC';
}
