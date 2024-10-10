const capitalize = require('./testing.js');
const reverseString = require('./reverse.js');
const calculator = require('./calculator.js');
const caesarCipher = require('./caesarCipher.js');
const analyzeArray = require('./analyzeArray.js');

test('capitalizes first letter in string', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('capitalizes first letter', () => {
    expect(capitalize('this is a test string')).toBe('This is a test string');
});

test('reverses the string', () => {
    expect(reverseString('this is a test string')).toBe('gnirts tset a si siht');
});

test('calculator adds', () => {
    expect(calculator.add(4, 7)).toBe(11);
});

test('calculator subtracts', () => {
    expect(calculator.subtract(4, 7)).toBe(-3);
});

test('calculator multiplies', () => {
    expect(calculator.multiply(4, 7)).toBe(28);
});

test('calculator divides', () => {
    expect(calculator.divide(9, 3)).toBe(3);
});

test('cipher text wrapping', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('cipher case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('punctuation unchanged', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('analyze array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({ average: 4, min: 1, max: 8, length: 6 });
});