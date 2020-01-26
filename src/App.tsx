import React, { useState, useEffect } from 'react';
import BattleContainer from 'screens/battle/BattleContainer';
import { beginBattle, planTurn, executeTurn, completeTurn } from 'logic/battle';
import { ghoul, superGhoul, schauffer } from 'characters/enemies';

import warrior from 'characters/warrior';
import wildling from 'characters/wildling';

export default function App() {
  let [battling, setBattling] = useState(false);

  return (
    <div id="AppContainer">
      {!battling && (
        <button onClick={() => setBattling(true)}>Begin Battle</button>
      )}
      {battling && <BattleContainer />}
    </div>
  );
}
