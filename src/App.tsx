import React, { useState, useEffect } from 'react';
import Battle from 'screens/battle/BetterBattle';
import { beginBattle, planTurn, executeTurn, completeTurn } from 'logic/battle';
import { ghoul, superGhoul, schauffer } from 'characters/enemies';

import warrior from 'characters/warrior';
import wildling from 'characters/wildling';

export default function App() {
  let battleStart = beginBattle(
    [{ ...warrior }, { ...wildling }],
    [{ ...ghoul }, { ...superGhoul }, { ...schauffer }]
  );

  let [battle, setBattle] = useState(battleStart);

  useEffect(() => {
    let { currentTurn } = battle;

    if (
      currentTurn.state === 'Planning' &&
      currentTurn.character.type === 'NPC'
    ) {
      const timer = setTimeout(
        () =>
          setBattle(
            planTurn(battle, {
              action: currentTurn.character.chooseAction(),
              target: currentTurn.character.chooseTarget(
                battle.players.filter(p => p.hp > 0)
              )
            })
          ),
        1000
      );
      return () => clearTimeout(timer);
    } else if (currentTurn.state === 'Executing') {
      setBattle(executeTurn(battle));
    } else if (currentTurn.state === 'Completed') {
      setBattle(completeTurn(battle));
    }
  }, [battle]);

  return (
    <div id="AppContainer">
      <Battle
        battle={battle}
        planTurn={action => setBattle(planTurn(battle, action))}
      />
    </div>
  );
}
