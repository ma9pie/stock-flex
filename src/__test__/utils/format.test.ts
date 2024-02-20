const { numberToString, trimZero, comma, decomma, floor } = require('@/utils');

describe('numberToString test', () => {
  test('', () => {
    const result = numberToString(0);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = numberToString('0');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = numberToString(null);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = numberToString(undefined);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = numberToString('test');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = numberToString(123);
    expect(result).toEqual('123');
  });
  test('', () => {
    const result = numberToString(-123);
    expect(result).toEqual('-123');
  });
  test('', () => {
    const result = numberToString(1e-7);
    expect(result).toEqual('0.0000001');
  });
  test('', () => {
    const result = numberToString('1e-7');
    expect(result).toEqual('0.0000001');
  });
  test('', () => {
    const result = numberToString(1.23e-5);
    expect(result).toEqual('0.0000123');
  });
});

describe('trimZero test', () => {
  test('', () => {
    const result = trimZero('');
    expect(result).toEqual('');
  });
  test('', () => {
    const result = trimZero('0');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = trimZero('00');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = trimZero('000');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = trimZero('.0');
    expect(result).toEqual('.0');
  });
  test('', () => {
    const result = trimZero('.00');
    expect(result).toEqual('.00');
  });
  test('', () => {
    const result = trimZero('0.');
    expect(result).toEqual('0.');
  });
  test('', () => {
    const result = trimZero('0.0');
    expect(result).toEqual('0.0');
  });
  test('', () => {
    const result = trimZero('00000.000');
    expect(result).toEqual('0.000');
  });
  test('', () => {
    const result = trimZero('00000.100');
    expect(result).toEqual('0.100');
  });
  test('', () => {
    const result = trimZero('1000');
    expect(result).toEqual('1000');
  });
  test('', () => {
    const result = trimZero('0.001');
    expect(result).toEqual('0.001');
  });
  test('', () => {
    const result = trimZero('0.001000');
    expect(result).toEqual('0.001000');
  });
  test('', () => {
    const result = trimZero('00000.012');
    expect(result).toEqual('0.012');
  });
  test('', () => {
    const result = trimZero('00000.012000');
    expect(result).toEqual('0.012000');
  });
  test('', () => {
    const result = trimZero('987654.321');
    expect(result).toEqual('987654.321');
  });
  test('', () => {
    const result = trimZero('987654321');
    expect(result).toEqual('987654321');
  });
  test('', () => {
    const result = trimZero('456.00000');
    expect(result).toEqual('456.00000');
  });
});

describe('comma test', () => {
  test('', () => {
    const result = comma('1000');
    expect(result).toEqual('1,000');
  });
  test('', () => {
    const result = comma('1000.123');
    expect(result).toEqual('1,000.123');
  });
  test('', () => {
    const result = comma('1000.123', 0);
    expect(result).toEqual('1,000');
  });
  test('', () => {
    const result = comma('1000.123', 1);
    expect(result).toEqual('1,000.1');
  });
  test('', () => {
    const result = comma('-1000.123', 1);
    expect(result).toEqual('-1,000.1');
  });
  test('', () => {
    const result = comma('0.000123', 4);
    expect(result).toEqual('0.0001');
  });
  test('', () => {
    const result = comma('0.000123', 3);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = comma('0.0');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = comma('1000000.0');
    expect(result).toEqual('1,000,000');
  });
  test('', () => {
    const result = comma(1000000000);
    expect(result).toEqual('1,000,000,000');
  });
  test('', () => {
    const result = comma('1000000000', 3);
    expect(result).toEqual('1,000,000,000');
  });
  test('', () => {
    const result = comma(1789.123456);
    expect(result).toEqual('1,789.123456');
  });
  test('', () => {
    const result = comma(1789.123456, 0);
    expect(result).toEqual('1,789');
  });
  test('', () => {
    const result = comma(1789.123456, 2);
    expect(result).toEqual('1,789.12');
  });
  test('', () => {
    const result = comma(0.0000001);
    expect(result).toEqual('0.0000001');
  });
  test('', () => {
    const result = comma(0.1);
    expect(result).toEqual('0.1');
  });
  test('', () => {
    const result = comma('', 2);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = comma('test', 2);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = comma(undefined, 2);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = comma(null, 2);
    expect(result).toEqual('0');
  });
});

describe('decomma test', () => {
  test('', () => {
    const result = decomma('');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = decomma(0);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = decomma('0');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = decomma(null);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = decomma(undefined);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = decomma('test');
    expect(result).toEqual('0');
  });

  test('', () => {
    const result = decomma('1,000');
    expect(result).toEqual('1000');
  });
  test('', () => {
    const result = decomma('-2,500');
    expect(result).toEqual('-2500');
  });
  test('', () => {
    const result = decomma('3,456.789');
    expect(result).toEqual('3456.789');
  });
  test('', () => {
    const result = decomma('-1,234.567');
    expect(result).toEqual('-1234.567');
  });
  test('', () => {
    const result = decomma('1,000,000,000,000');
    expect(result).toEqual('1000000000000');
  });
  test('', () => {
    const result = decomma('0.0000000001');
    expect(result).toEqual('0.0000000001');
  });
  test('', () => {
    const result = decomma('1.23e-5');
    expect(result).toEqual('0.0000123');
  });
  test('', () => {
    const result = decomma(1.23e-5);
    expect(result).toEqual('0.0000123');
  });
  test('', () => {
    const result = decomma(4e3);
    expect(result).toEqual('4000');
  });
  test('', () => {
    const result = decomma('-1,000,000,000,000,000,000');
    expect(result).toEqual('-1000000000000000000');
  });
  test('', () => {
    const result = decomma(1e6);
    expect(result).toEqual('1000000');
  });
  test('', () => {
    const result = decomma(1e-6);
    expect(result).toEqual('0.000001');
  });
});

describe('floor test', () => {
  test('', () => {
    const result = floor('123.123123123', 1);
    expect(result).toEqual('123.1');
  });
  test('', () => {
    const result = floor('123123123');
    expect(result).toEqual('123123123');
  });
  test('', () => {
    const result = floor('1e6');
    expect(result).toEqual('1000000');
  });
  test('', () => {
    const result = floor('0');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = floor('0.11111', 6);
    expect(result).toEqual('0.11111');
  });
  test('', () => {
    const result = floor('0.11111', 3);
    expect(result).toEqual('0.111');
  });
  test('', () => {
    const result = floor('0.11111', 2);
    expect(result).toEqual('0.11');
  });
  test('', () => {
    const result = floor('0.11111', 1);
    expect(result).toEqual('0.1');
  });
  test('', () => {
    const result = floor('0.11111', 0);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = floor('');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = floor('test');
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = floor(null, 0);
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = floor(undefined, 0);
    expect(result).toEqual('0');
  });
});
