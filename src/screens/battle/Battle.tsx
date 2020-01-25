import React from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import Character from './Character';
import CharacterFace from 'assets/CharacterFace';
import Log from './Log';
import { BattleState } from 'logic/battle';
import PlayerCharacterSprite from 'characters/PlayerCharacterSprite';

import './Battle.css';

export interface BattleProps {
  battle: BattleState;
  onAdvance: (event: any) => void;
}
export default function Battle({ battle, onAdvance }: BattleProps) {
  return (
    <ErrorBoundary>
      <div id="Battle">
        <div className="container">
          <div>
            {battle.players.map(player => (
              <div className="faceContainer" key={player.name}>
                <PlayerCharacterSprite character={player} size={50} />
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
        {battle.result == null && (
          <button type="button" onClick={onAdvance}>
            Next Round
          </button>
        )}
        <Log rounds={battle.log} />
      </div>
    </ErrorBoundary>
  );
}
