import { createReducer } from '@reduxjs/toolkit';
import d, { roll } from 'utility/dice';
import { Action, ActionResult } from './types/action';
import { BattleState } from './types/state';

import {
  initialize,
  selectAction,
  selectTarget,
  applyAction,
  finishTurn
} from './actions';

const initialState: BattleState = {
  charactersById: {},
  battleOrder: [],
  log: [],
  currentTurn: {}
};

const battleReducer = createReducer(initialState, builder =>
  builder
    .addCase(initialize, (battle, { payload }) => {
      battle.log = [];
      battle.charactersById = {};
      for (let character of payload.characters) {
        character.initiative = d(20);
        battle.charactersById[character.id] = character;
      }
      battle.battleOrder = payload.characters
        .sort((a, b) => b.initiative - a.initiative)
        .map(c => c.id);

      battle.currentTurn = {
        actorId: getIdOfCharacterWithInitiative(battle)
      };
    })

    .addCase(selectAction, (battle, { payload }) => {
      battle.currentTurn.action = payload.action;
    })

    .addCase(selectTarget, (battle, { payload }) => {
      battle.currentTurn.targetId = payload.targetId;
    })

    .addCase(applyAction, battle => {
      const { currentTurn, charactersById } = battle;
      const actor = charactersById[currentTurn.actorId as number];
      const target = charactersById[currentTurn.targetId as number];
      const action = currentTurn.action as Action;

      const hitRoll = d(20);
      const isCrit = hitRoll === 20;
      const isHit = isCrit || hitRoll + actor.attackModifier > target.ac;
      let damage = 0;

      if (isHit) {
        damage = damage + action.damageModifier;

        if (action.rollDamage != null) {
          damage =
            damage +
            action.rollDamage
              .map(d => roll(d.count, d.sides))
              .reduce((t, d) => t + d, 0);
        }

        if (isCrit) {
          damage = damage * 2;
        }
      }

      target.hp -= damage;
      currentTurn.actionResult = {
        actorId: actor.id,
        targetId: target.id,
        roll: hitRoll,
        isHit,
        isCrit,
        damage
      };
    })

    .addCase(finishTurn, battle => {
      battle.log.push(battle.currentTurn.actionResult as ActionResult);
      battle.currentTurn = {
        actorId: getIdOfCharacterWithInitiative(battle)
      };
    })
);

/**
 * Gets the ID of the character that has initiative.
 * @param {BattleState} battle The current state of the battle.
 */
function getIdOfCharacterWithInitiative(battle: BattleState): number {
  const order = battle.battleOrder.length % battle.log.length;
  return battle.battleOrder[order];
}

export default battleReducer;
