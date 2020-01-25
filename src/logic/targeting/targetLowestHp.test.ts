import targetLowestHp from './targetLowestHp';
import { Character } from '../types';

const low = { name: 'Larry', hp: 8, maxHp: 10 } as Character;
const medium = { name: 'Curly', hp: 9, maxHp: 10 } as Character;
const high = { name: 'Moe', hp: 10, maxHp: 10 } as Character;

// TODO: switch to throwing an error if the array is empty.
// WHY:  save the calling code from doing an unnecessary null check.
test('targetLowestHp: throws if the character array is empty', () => {
  expect(() => targetLowestHp([])).toThrow(
    'Empty target array is not supported.'
  );
});

test(
  'targetLowestHp: returns the first character if ' +
    'it is the only character in the array',
  () => {
    const result = targetLowestHp([low]);
    expect(result).toBe(low);
  }
);

test('targetLowestHp: returns the character with the lowest HP', () => {
  const result = targetLowestHp([low, medium, high]);
  expect(result).toBe(low);
});

test(
  'targetLowestHp: if lowest HP is shared by multiple characters, ' +
    'the character with the lowest HP and HP percentage is returned',
  () => {
    const lowerPercentage = { ...low, maxHp: 11 } as Character;
    const result = targetLowestHp([low, lowerPercentage, medium, high]);
    expect(result).toBe(lowerPercentage);
  }
);

test(
  'targetLowestHp: if lowest HP and HP Percentage is shared by ' +
    'multiple characters, the first of these characters when ' +
    'ordered by name will be returned.',
  () => {
    const first = { ...low, name: 'Alfred' };
    const result = targetLowestHp([low, first, medium, high]);
    expect(result).toBe(first);
  }
);
