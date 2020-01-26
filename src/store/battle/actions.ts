import { createReducer, createAction } from '@reduxjs/toolkit';
import d, { roll } from 'utility/dice';
import { Action, ActionResult } from './types/action';
import { BattleState } from './types/state';
import {
  PlayerCharacter,
  NonPlayerCharacter,
  Character
} from './types/character';

export const initialize = createAction<{ characters: Character[] }>(
  'battle/initialize'
);

export const selectAction = createAction<{ action: Action }>(
  'battle/selectAction'
);

export const selectTarget = createAction<{ targetId: number }>(
  'battle/selectTarget'
);

export const applyAction = createAction('battle/applyAction');

export const finishTurn = createAction('battle/finishTurn');
