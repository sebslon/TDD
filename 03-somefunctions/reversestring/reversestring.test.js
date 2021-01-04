const reverseString = require('./reversestring');

test('reverseString function should be defined', () => {
  expect(reverseString).toBeDefined();
});

test('should reverse a string', () => {
  expect(reverseString('sheep')).toEqual('peehs');
});

test('should reverse a string with uppercase', () => {
  expect(reverseString('Sheep')).toEqual('peehs');
});