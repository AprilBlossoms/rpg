import React from 'react';
import ErrorBoundary from 'ErrorBoundary';
import Character from './CharacterInfo';
import CharacterFace from 'assets/CharacterFace';
import TurnLog from './TurnLog';
import ActionOptions from './ActionOptions';
import { BetterBattleState, SelectedAction } from 'logic/battle';
import PlayerCharacterSprite from 'characters/PlayerCharacterSprite';

import './Battle.css';
import { PlayerCharacter } from 'characters/types';

export interface BattleProps {
  battle: BetterBattleState;
  planTurn: (action: SelectedAction) => void;
}
export default function Battle({ battle, planTurn }: BattleProps) {
  return (
    <ErrorBoundary>
      <div id="Battle">
        {battle.currentTurn.character.name}'s turn!
        <TurnLog currentTurn={battle.currentTurn} log={battle.log} />
        <div className="container">
          <div>
            {battle.actionQueue
              .filter(c => c.type === 'PC')
              .map(player => (
                <div className="faceContainer" key={player.name}>
                  <PlayerCharacterSprite
                    character={player as PlayerCharacter}
                    size={50}
                  />
                  <p>{player.name}</p>
                </div>
              ))}
          </div>
          <div>
            {battle.enemies.map(enemy => (
              <div className="faceContainer" key={enemy.name}>
                <CharacterFace character={enemy} size={50} />
                <p>{enemy.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div id="Container">
          <div id="Players">
            {battle.players.map(player => (
              <Character character={player} key={player.name} />
            ))}
          </div>
        </div>
        {battle.currentTurn.character.type === 'PC' &&
          battle.currentTurn.state === 'Planning' && (
            <ActionOptions
              battle={battle}
              player={battle.currentTurn.character as PlayerCharacter}
              selectAction={planTurn}
            />
          )}
      </div>
    </ErrorBoundary>
  );
}
