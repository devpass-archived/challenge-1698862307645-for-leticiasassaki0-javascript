const myObj = require('./obj');

test('Print object properties', () => {
  const expectedOutput = 'name: Alice
age: 30
email: alice@example.com
';
  let result = '';

  const mockLog = (output) => {
    result += output;
  };
  
  console.log = jest.fn(mockLog);
  
  require('./index');

  expect(result).toBe(expectedOutput);
});
