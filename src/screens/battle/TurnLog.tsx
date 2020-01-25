import React from 'react';
import { Turn, CompletedTurn } from 'logic/battle';

interface TurnLogProps {
  log: CompletedTurn[];
  currentTurn: Turn;
}
export default function TurnLog({ log, currentTurn }: TurnLogProps) {
  let turn: CompletedTurn = log[log.length - 1];

  if (currentTurn.state === 'Completed') {
    turn = currentTurn;
  }
  return (
    <div>
      <p>{turn != null && turn.result.message}</p>
    </div>
  );
}
