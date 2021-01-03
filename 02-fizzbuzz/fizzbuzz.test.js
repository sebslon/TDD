const fizzBuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {
  test('should return 1 for input 1', () => {
    expect(fizzBuzz(1)).toBe(1);
  });
  
  test('should return 2 for input 2', () => {
    expect(fizzBuzz(2)).toBe(2);
  });

  test('should return "Fizz" for input of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  test('should return "Fizz" for multiples of 3', () => {
    expect(fizzBuzz(27)).toBe('Fizz');
  });

  test('should return "Fizz" for input of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  test('should return "Buzz" for multiples of 5', () => {
    expect(fizzBuzz(35)).toBe('Buzz');
  });

  test('should return "FizzBuzz" for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
})