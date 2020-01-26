import { CharacterType, Character } from './character';

export type TargetType = CharacterType | 'BOTH';

export interface Die {
  sides: number;
}
export interface Dice extends Die {
  count: number;
}

export interface Action {
  accuracyModifier: number | 'Guaranteed';
  damageModifier: number;
  rollDamage?: Dice[] | null;
  targetType: TargetType;
}

export interface ActionResult {
  actorId: number;
  targetId: number;
  roll: number;
  isCrit: boolean;
  isHit: boolean;
  damage: number;
}
