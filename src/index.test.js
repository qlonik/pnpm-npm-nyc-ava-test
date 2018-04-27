const test = require('ava');
const {
  summation,
  subtraction,
} = require('./index');

test('adds', (t) => {
  t.is(4, summation(2, 2));
});

test('subtracts', (t) => {
  t.is(0, subtraction(2, 2));
});
