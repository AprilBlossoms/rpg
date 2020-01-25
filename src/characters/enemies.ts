import { NonPlayerCharacter } from './types';
import { targetRandom, targetHighestHp } from 'logic/targeting';
import { bite, claw, leer } from 'logic/actions';
import { getRandomItem } from 'logic/utility';

const ghoul: NonPlayerCharacter = {
  type: 'NPC',
  name: 'Ghoul',
  attackModifier: 0,
  hp: 12,
  maxHp: 12,
  ac: 6,
  chooseTarget: targetRandom,
  chooseAction: () => getRandomItem([claw, bite])
};

const superGhoul: NonPlayerCharacter = {
  type: 'NPC',
  name: 'Super Ghoul',
  attackModifier: 1,
  hp: 22,
  maxHp: 22,
  ac: 8,
  chooseTarget: targetRandom,
  chooseAction: () => claw
};

const schauffer: NonPlayerCharacter = {
  type: 'NPC',
  name: 'Schauffer',
  attackModifier: 8,
  hp: 22,
  maxHp: 22,
  ac: 8,
  chooseTarget: targetHighestHp,
  chooseAction: () => leer
};

export { ghoul, superGhoul, schauffer };
