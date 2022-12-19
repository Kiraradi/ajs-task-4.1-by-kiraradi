import checkHealth from './checkHealth.js';

const dataList = [
  ['healthy', { name: 'Маг', health: 90 }, 'healthy'],
  ['wounded', { name: 'Маг', health: 45 }, 'wounded'],
  ['critical', { name: 'Маг', health: 8 }, 'critical'],
];

const handler = test.each(dataList);

handler('testing checkHealth function with %s status and %i amount', (status, data, expected) => {
  const result = checkHealth(data);
  expect(result).toBe(expected);
});
