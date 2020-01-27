export type CharacterType = 'PC' | 'NPC';

export interface PlayerCharacter {
  id: number;
  type: 'PC';
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
  type: 'NPC';
  class: 'Ghoul' | 'SuperGhoul' | 'Schauffer';
  name: string;
  hp: number;
  maxHp: number;
  ac: number;
  initiative: number;
  attackModifier: number;
}

export type Character = PlayerCharacter | NonPlayerCharacter;
