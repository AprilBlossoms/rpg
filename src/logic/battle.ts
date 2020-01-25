import produce from 'immer';
import { performAction } from './actions';
import { NonPlayerCharacter, PlayerCharacter } from 'characters/types';
import { Character, ActionResult, Action } from './types';
import { d } from './utility';

/**
 * Represents an action to be taken.
 */
export interface SelectedAction {
  action: Action;
  target: Character;
}

/**
 * Represents a turn that is being planned.
 */
export interface PlanningTurn {
  state: 'Planning';
  character: Character;
}

/**
 * Represents a turn that is being executed.
 */
export interface ExecutingTurn {
  state: 'Executing';
  character: Character;
  selectedAction: SelectedAction;
}

/**
 * Represents a turn that has completed.
 */
export interface CompletedTurn {
  state: 'Completed';
  character: Character;
  action: SelectedAction;
  result: ActionResult;
}

export type Turn = PlanningTurn | ExecutingTurn | CompletedTurn;

/**
 * Represents a round of battle.
 */
export interface Round {
  number: number;
  actions: ActionResult[];
}

/**
 * Represents the state of a battle.
 */
export interface BattleState {
  result: 'WIN' | 'LOSE' | null;
  players: PlayerCharacter[];
  enemies: Character[];
  log: Round[];
  currentRound: Round;
}

export interface BetterBattleState {
  result: 'WIN' | 'LOSE' | null;
  players: PlayerCharacter[];
  enemies: NonPlayerCharacter[];
  actionQueue: Character[];
  log: CompletedTurn[];
  currentTurn: Turn;
}

export function beginBattle(
  players: PlayerCharacter[],
  enemies: NonPlayerCharacter[]
): BetterBattleState {
  const actionQueue = rollForInitiative([...players, ...enemies]);
  const character = actionQueue[0];

  return {
    result: null,
    players,
    enemies,
    actionQueue,
    log: [],
    currentTurn: { state: 'Planning', character }
  };
}

export function planTurn(
  before: BetterBattleState,
  action: SelectedAction
): BetterBattleState {
  return produce(before, after => {
    if (after.currentTurn.state === 'Planning') {
      after.currentTurn = {
        ...after.currentTurn,
        state: 'Executing',
        selectedAction: action
      };
    }
  });
}

export function executeTurn(before: BetterBattleState): BetterBattleState {
  let result: ActionResult;

  return produce(before, after => {
    if (after.currentTurn.state === 'Executing') {
      let {
        character,
        selectedAction: { target, action }
      } = after.currentTurn;

      result = performAction(character, target, action);

      let targetCharacter = after.actionQueue.filter(
        p => p.name === target.name
      )[0];

      targetCharacter.hp = targetCharacter.hp - result.damage;
      if (targetCharacter.hp < 0) targetCharacter.hp = 0;
    }
    after.currentTurn.state = 'Completed';
    (after.currentTurn as CompletedTurn).result = result;
  });
}

export function completeTurn(before: BetterBattleState) {
  return produce(before, after => {
    if (!after.players.some(p => p.hp > 0)) {
      after.result = 'LOSE';
      return;
    } else if (!after.enemies.some(p => p.hp > 0)) {
      after.result = 'WIN';
      return;
    } else if (after.currentTurn.state === 'Completed') {
      let canAct = false;

      while (!canAct) {
        after.actionQueue = rotateQueue(after.actionQueue);
        canAct = after.actionQueue[0].hp > 0;
      }

      after.log.push(after.currentTurn);
      after.currentTurn = {
        state: 'Planning',
        character: after.actionQueue[0]
      };
    }
  });
}

export function playNextRound(before: BattleState): BattleState {
  return produce(before, after => {
    let round: Round = {
      number: before.log.length + 1,
      actions: []
    };

    for (let player of after.players) {
      if (player.hp > 0 && after.enemies.some(e => e.hp > 0)) {
        let action = player.chooseAction();
        let target = player.chooseTarget(after.enemies);
        let result = performAction(player, target, action);

        round.actions.push(result);
      }
    }

    for (let enemy of after.enemies) {
      if (enemy.hp > 0 && after.players.some(e => e.hp > 0)) {
        let action = enemy.chooseAction();
        let target = enemy.chooseTarget(after.players);
        let result = performAction(enemy, target, action);

        round.actions.push(result);
      }
    }

    if (after.players.filter(p => p.hp > 0).length === 0) {
      after.result = 'LOSE';
    } else if (after.enemies.filter(p => p.hp > 0).length === 0) {
      after.result = 'WIN';
    } else {
      after.result = null;
    }

    after.log.push(round);
  });
}

function rollForInitiative(characters: Character[]): Character[] {
  return characters
    .map(character => ({ ...character, initiative: d(20) }))
    .sort((a, b) => b.initiative - a.initiative);
}

function rotateQueue<T>(array: T[]): T[] {
  let queue = [...array];

  if (queue[0] != null) {
    let end = queue.shift();

    if (end != null) {
      queue.push(end);
    }
  }

  return queue;
}
