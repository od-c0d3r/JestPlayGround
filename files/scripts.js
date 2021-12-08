export function stringLength(str) {
  if (str.length >= 1 && str.length <= 10) return str.length;
  throw new Error();
}

export function reverseString(str) {
    return str.split('').reverse().join('')
}