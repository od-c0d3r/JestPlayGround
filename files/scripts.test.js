import stringLength from './scripts';

test('returns string length', () => {
  const expected = 4;
  const result = stringLength('test');
  expect(result).toEqual(expected);
});

test('throw an error when string less than 1 and more than 10', () => {
  expect(() => stringLength('veryolongsting more than 10char')).toThrow();
});
