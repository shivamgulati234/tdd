const { add } = require('./stringCalculator');

test('returns 0 for an empty string', () => {
  expect(add('')).toBe(0);
});

test('returns number itself when one number is passed', () => {
  expect(add('1')).toBe(1);
});

test('returns sum for two numbers', () => {
  expect(add('1,2')).toBe(3);
});

test('handles any amount of comma-separated numbers', () => {
  expect(add('1,2,3,4')).toBe(10);
});

test('handles newlines as delimiters', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('supports custom delimiter', () => {
  expect(add('//;\n1;2')).toBe(3);
});

test('throws on negative numbers', () => {
  expect(() => add('1,-2,-3')).toThrow('Negative numbers not allowed: -2, -3');
});