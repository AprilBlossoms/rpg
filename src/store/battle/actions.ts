import { createAction } from '@reduxjs/toolkit';
import { Action } from './types/action';
import { Character } from './types/character';

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
