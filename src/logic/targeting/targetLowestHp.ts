import { Character } from '../types';

export default function targetLowestHp(targets: Character[]): Character {
  if (targets.length === 0)
    throw new Error('Empty target array is not supported.');

  var lowestHp = targets.map(target => target.hp).sort((a, b) => a - b)[0];
  var lowestHpTargets = targets.filter(target => target.hp === lowestHp);

  if (lowestHpTargets.length === 1) {
    return lowestHpTargets[0];
  }

  var lowestHpPercentTargets = lowestHpTargets
    .map(target => ({ hpPercent: target.hp / target.maxHp, target }))
    .sort((a, b) => a.hpPercent - b.hpPercent)
    .filter((hpPercentTarget, i, hpPercentTargets) => {
      return hpPercentTarget.hpPercent === hpPercentTargets[0].hpPercent;
    })
    .map(hpPercecntTarget => hpPercecntTarget.target);

  if (lowestHpPercentTargets.length === 1) {
    return lowestHpPercentTargets[0];
  }

  return lowestHpPercentTargets.sort((a, b) =>
    a.name < b.name ? -1 : b.name < a.name ? 1 : 0
  )[0];
}
