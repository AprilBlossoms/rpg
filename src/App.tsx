import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BattleContainer from 'screens/battle/BattleContainer';
import {
  PlayerCharacter,
  NonPlayerCharacter
} from 'store/battle/types/character';
import { initialize } from 'store/battle/actions';
import { Dispatch } from '@reduxjs/toolkit';

export default function App() {
  const dispatch = useDispatch();
  let [battling, setBattling] = useState(false);

  useEffect(() => {
    beginBattle(dispatch);
    setBattling(true);
  }, [beginBattle]);

  return <div id="AppContainer">{battling && <BattleContainer />}</div>;
}

function beginBattle(dispatch: Dispatch<any>) {
  const warrior: PlayerCharacter = {
    type: 'PC',
    id: 1,
    class: 'Warrior',
    name: 'Gunther',
    hp: 58,
    maxHp: 58,
    ac: 15,
    initiative: 0,
    attackModifier: 1
  };
  const wildling: PlayerCharacter = {
    type: 'PC',
    id: 2,
    class: 'Wildling',
    name: 'Ulrich',
    hp: 58,
    maxHp: 58,
    ac: 15,
    initiative: 0,
    attackModifier: 1
  };
  const ghoul1: NonPlayerCharacter = {
    type: 'NPC',
    id: 101,
    class: 'Ghoul',
    name: 'Larry',
    hp: 22,
    maxHp: 22,
    ac: 13,
    initiative: 0,
    attackModifier: 0
  };
  const ghoul2: NonPlayerCharacter = {
    type: 'NPC',
    id: 102,
    class: 'Ghoul',
    name: 'Curly',
    hp: 11,
    maxHp: 22,
    ac: 13,
    initiative: 0,
    attackModifier: 0
  };

  dispatch(initialize({ characters: [warrior, wildling, ghoul1, ghoul2] }));
}
