import { Character, PlayerCharacter, NonPlayerCharacter } from './character';
import { Action, ActionResult } from './action';

export interface Turn {
  actorId?: number;
  targetId?: number;
  action?: Action;
  actionResult?: ActionResult;
}

export interface BattleState {
  charactersById: { [key: number]: Character };
  battleOrder: number[];
  log: ActionResult[];
  currentTurn: Turn;
}
