import React from 'react';
import * as types from '../../logic/types';

import './Log.css';

export interface LogProps {
  rounds: types.Round[];
}
export default function Log({ rounds }: LogProps) {
  return (
    <div id="Log">
      {rounds.map(round => (
        <div className="round" key={round.number}>
          <h4>Round {round.number}</h4>
          {round.actions.map(action => (
            <p key={`${round.number}${action.message}`}>
              {action.isCrit && <strong>CRIT!</strong>}
              {action.message}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
