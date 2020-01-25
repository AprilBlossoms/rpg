import { Character } from '../types';
export default function targetHighestHp(targets: Character[]): Character {
  return [...targets]
    .filter(target => target.hp > 0)
    .sort((a, b) => b.hp - a.hp)[0];
}
