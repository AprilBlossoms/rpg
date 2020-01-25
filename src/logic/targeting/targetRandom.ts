import { Character } from '../types';

export default function targetRandom(targets: Character[]): Character {
  var validTargets = targets.filter(target => target.hp > 0);
  return validTargets[Math.floor(Math.random() * validTargets.length)];
}
