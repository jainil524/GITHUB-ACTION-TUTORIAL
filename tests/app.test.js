// tests/math.test.js
const { add, subtract } = require('../src/math');

test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
});

test('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(10, 20)).toBe(-10);
});
    