import * as Scripts from './scripts';

test('returns string length', () => {
  const expected = 4;
  const result = Scripts.stringLength('test');
  expect(result).toEqual(expected);
});

test('throw an error when string less than 1 and more than 10', () => {
  expect(() => Scripts.stringLength('veryolongsting more than 10char')).toThrow();
});

test('returns reversed string', () => {
  let expected = 'pilf'
  let result = Scripts.reverseString('flip');
  expect(result).toBe(expected);
});
