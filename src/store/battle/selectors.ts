import { createSelector } from '@reduxjs/toolkit';
import { BattleState } from './types/state';
import { PlayerCharacter, NonPlayerCharacter } from './types/character';

function getCharactersById(state: BattleState) {
  return state.charactersById;
}

export const getAllCharacters = createSelector(
  [getCharactersById],
  charactersById => Object.values(charactersById)
);

export const getPlayers = createSelector(
  [getAllCharacters],
  characters => characters.filter(p => p.type === 'PC') as PlayerCharacter[]
);

export const getEnemies = createSelector(
  [getAllCharacters],
  characters => characters.filter(p => p.type === 'NPC') as NonPlayerCharacter[]
);
