const { createUid } = require('@/utils');

describe('createUid test', () => {
  test('', () => {
    const results = [];
    for (let i = 0; i < 1000; i++) {
      const uid1 = createUid();
      const uid2 = createUid();
      results.push(uid1 !== uid2);
    }
    expect(results.every((res) => Boolean(res))).toBeTruthy();
  });
});
