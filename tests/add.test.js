const test = require('node:test');
const assert = require('node:assert');

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

test('adds two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('multiplies two numbers', () => {
  assert.strictEqual(multiply(2, 3), 6);
});