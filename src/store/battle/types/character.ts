export const PC = 'PC';
export const NPC = 'NPC';
export type CharacterType = 'PC' | 'NPC';

export interface PlayerCharacter {
  id: number;
  type: typeof PC;
  class: 'Warrior' | 'Wildling';
  name: string;
  hp: number;
  maxHp: number;
  ac: number;
  initiative: number;
  attackModifier: number;
}

export interface NonPlayerCharacter {
  id: number;
  type: typeof NPC;
  class: 'Ghoul' | 'SuperGhoul' | 'Schauffer';
  name: string;
  hp: number;
  maxHp: number;
  ac: number;
  initiative: number;
  attackModifier: number;
}

export type Character = PlayerCharacter | NonPlayerCharacter;
