/**
 * Represents a type of a character.
 */
export type CharacterType = 'PC' | 'NPC';

/**
 * A function that chooses a target character from a list of options.
 */
export type TargetSelector = (targetOptions: Character[]) => Character;

/**
 * A function that returns an action.
 */
export type ActionSelector = () => Action;

/**
 * Represents a character in the game.
 */
export interface Character {
  type: CharacterType;
  name: string;
  hp: number;
  maxHp: number;
  ac: number;
  initiative?: number;
  attackModifier: number;
  chooseTarget: TargetSelector;
  chooseAction: ActionSelector;
}

/**
 * Represents an action taken by a character in the game.
 */
export interface Action {
  accuracy: number | 'Guaranteed';
  miss: (actor: Character, target: Character) => string;
  hit: (actor: Character, target: Character, damage: Number) => string;
  damage: (actor: Character, target: Character | null) => number;
}

/**
 * Represents the result of an action taken by a character.
 */
export interface ActionResult {
  actor: Character;
  target: Character;
  roll: number | null;
  isCrit: boolean;
  isHit: boolean;
  damage: number;
  messages: string[];
}
