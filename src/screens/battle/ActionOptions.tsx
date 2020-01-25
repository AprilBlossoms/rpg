import React, { useState, useEffect } from 'react';
import { PlayerCharacter, ActionOption } from 'characters/types';
import { Character } from 'logic/types';
import { BetterBattleState, SelectedAction } from 'logic/battle';

interface ActionOptionsProps {
  battle: BetterBattleState;
  player: PlayerCharacter;
  selectAction: (action: SelectedAction) => void;
}
export default function ActionOptions({
  battle,
  player,
  selectAction
}: ActionOptionsProps) {
  let [targets, setTargets] = useState<Character[]>([]);
  let [action, setAction] = useState<ActionOption | null>(null);

  useEffect(() => {
    if (action != null) {
      setTargets(action.getValidTargets(battle.actionQueue));
    } else {
      setTargets([]);
    }
  }, [battle.actionQueue, action]);

  return (
    <div>
      <ul>
        {player.actionOptions.map(action => (
          <li onClick={() => setAction(action)}>{action.name}</li>
        ))}
      </ul>
      {targets.length && (
        <ul>
          {targets.map(target => (
            <li
              onClick={() => {
                if (action != null)
                  selectAction({ action: action.action(), target });
              }}
            >
              {target.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
