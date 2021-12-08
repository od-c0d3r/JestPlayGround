export function stringLength(str) {
  if (str.length >= 1 && str.length <= 10) return str.length;
  throw new Error();
}

export function reverseString(str) {
  return str.split('').reverse().join('');
}

export class Calculator {
  static add(x, y) {
    return x + y;
  }

  static subtract(x, y) {
    return x - y;
  }

  static divide(x, y) {
    return x / y;
  }

  static multiply(x, y) {
    return x * y;
  }
}