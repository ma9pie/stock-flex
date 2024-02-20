const { validateNumber } = require('@/utils');

describe('validateNumber test', () => {
  // Case true
  test('', () => {
    const result = validateNumber('');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('0');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('1');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('1000');
    expect(result).toBeTruthy();
  });
  test('999,999,999', () => {
    const result = validateNumber('999999999');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('0.1');
    expect(result).toBeTruthy();
  });
  test('1e-6', () => {
    const result = validateNumber('0.000001');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('123.123456');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('1.');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('.1');
    expect(result).toBeTruthy();
  });

  // Case false
  test('', () => {
    const result = validateNumber(' ');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('  ');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber(' 123.45 ');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber(null);
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber(undefined);
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('test');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('1e3');
    expect(result).toBeFalsy();
  });
  test('1,000,000,000', () => {
    const result = validateNumber('1000000000');
    expect(result).toBeTruthy();
  });
  test('', () => {
    const result = validateNumber('123.1234567');
    expect(result).toBeFalsy();
  });
  test('1e-7', () => {
    const result = validateNumber('0.0000001');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('+1000');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('+1,000');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('-1000');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('-1,000');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('1e5');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('+');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('-');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('0.0.1');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('1.1.1');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('123.45.67');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('123.45.67.89');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('12A3.45');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('123.45A');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('1.23e5');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('test.1');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('1.test');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('.');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('123+45');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('123-45');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('+123.45');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('+-123.45');
    expect(result).toBeFalsy();
  });
  test('', () => {
    const result = validateNumber('1@23 45');
    expect(result).toBeFalsy();
  });
});
