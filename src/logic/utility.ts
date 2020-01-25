export function getRandomItem(items: any[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export function getRandomInt(min: number, max: number) {
  if (min > max) {
    throw new Error('min cannot be greater than max.');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function d(sides: number) {
  return getRandomInt(1, sides);
}
