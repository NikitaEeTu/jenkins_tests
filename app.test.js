const { hello } = require('./app');

test('hello function should return Hello World!', () => {
  expect(hello("Nikita")).toBe('Hello World from Nikita!');
});

