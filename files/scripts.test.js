import * as Scripts from './scripts';

describe('Unit Tests', () => {
  describe('stringLength(str)', () => {
    test('returns string length', () => {
      const expected = 4;
      const result = Scripts.stringLength('test');
      expect(result).toEqual(expected);
    });

    test('returns 0 or positive number', () => {
      const result = Scripts.stringLength('test');
      expect(result).toBeGreaterThanOrEqual(0);
      expect(typeof result).toBe('number');
    });

    test('throw an error when string less than 1 and more than 10', () => {
      expect(() => Scripts.stringLength('veryolongsting more than 10char')).toThrow();
    });
  });

  describe('reverseString(str)', () => {
    test('returns reversed string', () => {
      const expected = 'pilf';
      const result = Scripts.reverseString('flip');
      expect(result).toBe(expected);
    });

    test('returns truthy value', () => {
      const result = Scripts.reverseString('flip');
      expect(result).toBeTruthy();
    });
  });

  describe('Calculator', () => {
    test('returns a value Number type', () => {
      const result1 = Scripts.Calculator.add(-3, -3);
      const result2 = Scripts.Calculator.subtract(-3, -3);
      const result3 = Scripts.Calculator.divide(-3, -3);
      const result4 = Scripts.Calculator.multiply(-3, -3);
      expect(typeof result1).toBe('number');
      expect(typeof result2).toBe('number');
      expect(typeof result3).toBe('number');
      expect(typeof result4).toBe('number');
    });

    describe('add(x, y)', () => {
      test('return sum of x and y', () => {
        const expected = -6;
        const result = Scripts.Calculator.add(-3, -3);
        expect(result).toBe(expected);
      });
    });
    describe('subtract(x, y)', () => {
      test('return subtract of x and y', () => {
        const expected = 0;
        const result = Scripts.Calculator.subtract(-3, -3);
        expect(result).toBe(expected);
      });
    });
    describe('divide(x, y)', () => {
      test('return division of x and y', () => {
        const expected = 1;
        const result = Scripts.Calculator.divide(-3, -3);
        expect(result).toBe(expected);
      });
      test('throws an error if y equals zero', () => {
        let result = () => Scripts.Calculator.divide(-3, 0);
        expect(() => result()).toThrow();
      });
    });
    describe('multiply(x, y)', () => {
      test('return multiply x and y', () => {
        const expected = 9;
        const result = Scripts.Calculator.multiply(-3, -3);
        expect(result).toBe(expected);
      });
    });
  });

  describe('capitalize()', () => {
    test('returns str with first char capitalized', () =>{
      const expected = 'Wow!'
      const result = Scripts.capitalize('wow!');
      expect(result).toBe(expected);
    });
  });
});
