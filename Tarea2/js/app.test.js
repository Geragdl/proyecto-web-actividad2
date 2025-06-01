const { sum } = require('./app');

test('suma correctamente', () => {
  expect(sum(1, 2)).toBe(3);
});
