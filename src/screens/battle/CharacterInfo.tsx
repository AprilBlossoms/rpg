import React from 'react';
import * as gameTypes from 'logic/types';

import './Character.css';

interface CharacterProps {
  character: gameTypes.Character;
}

export default function CharacterInfo({ character }: CharacterProps) {
  const isDead = character.hp === 0;
  const deadClass = isDead ? 'dead' : '';

  return (
    <table className={`character ${deadClass}`}>
      <thead>
        <tr>
          <th colSpan={2}>{character.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>HP</td>
          <td>{character.hp}</td>
        </tr>
      </tbody>
    </table>
  );
}
