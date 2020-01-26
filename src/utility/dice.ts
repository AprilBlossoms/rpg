import { getRandomInt } from './random';

export default function d(sides: number) {
  return getRandomInt(1, sides);
}

export function roll(count: number, sides: number): number {
  let sum = 0;

  for (var i = 0; i < count; i++) {
    sum += d(sides);
  }

  return sum;
}
