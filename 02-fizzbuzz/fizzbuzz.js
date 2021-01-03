// - multiplies of 3 - returns "Fizz",
// - multiplies of 5 - returns "Buzz",
// - multiplies of 3 & 5 - returns "FizzBuzz"
// - inputs < 3 returns an input

function fizzBuzz(num) {
  let result = '';

  if(num % 3 === 0) result += 'Fizz';
  if(num % 5 === 0) result += 'Buzz';

  return result.length ? result : num;
}

module.exports = fizzBuzz;