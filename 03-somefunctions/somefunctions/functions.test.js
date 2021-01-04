const functions = require("./functions");

// Running some functions before, after each test 

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());
// const initDatabase = () => console.log('Database initialized...');
// const closeDatabase = () => console.log('Database closed...');


test("Adds 2 + 2 to be equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT be equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// Checking for truthy & falsy values

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
  expect(functions.checkValue(0)).toBeFalsy();
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// Testing reference value - object

test("User should be Sebastian Slon object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Sebastian",
    lastName: "Slon",
  });
});

// less/greater than
test('Should be under 1600', () => {
  const load1 = 1700;
  const load2 = 800;
  expect(load1 + load2).toBeLessThan(2600);
});

// regex tests
test('There is no D in Sebastian', () => {
  expect('Sebastian').not.toMatch(/D/i);
})

// Arrays
test('Sebastian should be in usernames array', () => {
  const usernames = ['Sebastian', 'Ania', 'Martin'];
  expect(usernames).toContain('Sebastian');
})

// Async data 

//Promise
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham');
    })
});

//Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser()
  
  expect(data.name).toEqual('Leanne Graham');
});