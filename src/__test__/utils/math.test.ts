const { math } = require('@/utils');

describe('math test', () => {
  // Normal
  test('', () => {
    const result = math(3).value();
    expect(result).toEqual('3');
  });
  test('', () => {
    const result = math(1e7).value();
    expect(result).toEqual('10000000');
  });
  test('', () => {
    const result = math(1e-6).value();
    expect(result).toEqual('0.000001');
  });
  test('', () => {
    const result = math(1e-7).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(undefined).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(null).value();
    expect(result).toEqual('0');
  });

  // Addition
  test('', () => {
    const result = math(3).add(4).value();
    expect(result).toEqual('7');
  });
  test('', () => {
    const result = math(3).add(4).add(5).value();
    expect(result).toEqual('12');
  });
  test('', () => {
    const result = math(3).add(4).add(5).value();
    expect(result).toEqual('12');
  });
  test('', () => {
    const result = math(1e7).add(1e7).value();
    expect(result).toEqual('20000000');
  });
  test('', () => {
    const result = math(0.1).add(1e3).value();
    expect(result).toEqual('1000.1');
  });
  test('', () => {
    const result = math(1e-6).add(1e-6).value();
    expect(result).toEqual('0.000002');
  });
  test('', () => {
    const result = math(0).add(1e-3).value();
    expect(result).toEqual('0.001');
  });
  test('', () => {
    const result = math(1e-2).add(0).value();
    expect(result).toEqual('0.01');
  });
  test('', () => {
    const result = math(0).add(0).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(0.0).add(0.0).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(1).add(undefined).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).add(null).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math('0.155062399728289').add(0.1589).value();
    expect(result).toEqual('0.313962');
  });
  test('', () => {
    const result = math('999999999').add('-0.0001').value();
    expect(result).toEqual('999999998.9999');
  });
  test('', () => {
    const result = math(0.0000001).add(0.0000008).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(0.0000001).add(0.0000009).value();
    expect(result).toEqual('0.000001');
  });
  test('', () => {
    const result = math(Number.MAX_SAFE_INTEGER).add(1).value();
    expect(result).toEqual((Number.MAX_SAFE_INTEGER + 1).toString());
  });

  // Subtraction
  test('', () => {
    const result = math(3).sub(4).value();
    expect(result).toEqual('-1');
  });
  test('', () => {
    const result = math(1e-7).sub(1e-7).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(0.0000001).sub(0.0000001).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(1e-6).sub(1e-6).sub(1e-6).value();
    expect(result).toEqual('-0.000001');
  });
  test('', () => {
    const result = math(0.155062399728289).sub(0.1589).value();
    expect(result).toEqual('-0.003837');
  });
  test('', () => {
    const result = math('123456789').sub('123456789').value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(1.1).sub(2.2).sub(3.3).value();
    expect(result).toEqual('-4.4');
  });
  test('', () => {
    const result = math(0).sub(0).sub(0).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math('999999999').sub('-0.00001').value();
    expect(result).toEqual('999999999.00001');
  });
  test('', () => {
    const result = math(0.1).sub(1e-3).value();
    expect(result).toEqual('0.099');
  });
  test('', () => {
    const result = math(1e-3).sub(0.1).value();
    expect(result).toEqual('-0.099');
  });
  test('', () => {
    const result = math(1).sub(undefined).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).sub(null).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(undefined).sub(1).value();
    expect(result).toEqual('-1');
  });
  test('', () => {
    const result = math(null).sub(1).value();
    expect(result).toEqual('-1');
  });
  test('', () => {
    const result = math(3.2).sub(4.9).sub(5.99).value();
    expect(result).toEqual('-7.69');
  });
  test('', () => {
    const result = math(Number.MIN_SAFE_INTEGER).sub(1).value();
    expect(result).toEqual((Number.MIN_SAFE_INTEGER - 1).toString());
  });

  // Multiplication
  test('', () => {
    const result = math(3).mul(4).value();
    expect(result).toEqual('12');
  });
  test('', () => {
    const result = math(1e-5).mul(10).value();
    expect(result).toEqual('0.0001');
  });
  test('', () => {
    const result = math(1).mul(undefined).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(null).mul(1).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(0.1).mul(1e-5).value();
    expect(result).toEqual('0.000001');
  });
  test('', () => {
    const result = math(0.1).mul(1e-6).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(1e2).mul(1e2).value();
    expect(result).toEqual('10000');
  });
  test('', () => {
    const result = math(1e4).mul(1e-4).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).mul(1).mul(1).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).mul(1).mul(1).mul(1).mul(1).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).mul(1).mul(1).mul(1).mul(1).mul(1).mul(1).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).mul(1).mul(1).mul(0).mul(1).mul(1).mul(1).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(1).mul(-1).value();
    expect(result).toEqual('-1');
  });
  test('', () => {
    const result = math('999999999').mul('-0.00000001').value();
    expect(result).toEqual('-9.999999');
  });
  test('', () => {
    const result = math('123456789').mul('123456789').value();
    expect(result).toEqual('15241578750190521');
  });
  test('', () => {
    const result = math('0.155062399728289').mul('0.1589').value();
    expect(result).toEqual('0.024639');
  });
  test('', () => {
    const result = math('123123.155062399728289').mul('9999999.1589').value();
    expect(result).toEqual('1231231447065.111559');
  });
  test('', () => {
    const result = math('-123.99999').mul('-123.99999').value();
    expect(result).toEqual('15375.997520');
  });
  test('', () => {
    const result = math('124').mul('124').value();
    expect(result).toEqual('15376');
  });
  test('', () => {
    const result = math(1e-2).mul(1e-2).mul(1e-3).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math('27.258901').mul('20.529702').value();
    expect(result).toEqual('559.617114');
  });
  test('', () => {
    const result = math(Number.MAX_SAFE_INTEGER).mul(2).value();
    expect(result).toEqual((Number.MAX_SAFE_INTEGER * 2).toString());
  });
  test('', () => {
    const result = math(Number.MIN_SAFE_INTEGER).mul(2).value();
    expect(result).toEqual((Number.MIN_SAFE_INTEGER * 2).toString());
  });

  // Division
  test('', () => {
    const result = math(3).div(4).value();
    expect(result).toEqual('0.75');
  });
  test('', () => {
    const result = math(1).div(2).value();
    expect(result).toEqual('0.5');
  });
  test('', () => {
    const result = math(1).div(1e-6).value();
    expect(result).toEqual('1000000');
  });
  test('', () => {
    const result = math(1e-6).div(1).value();
    expect(result).toEqual('0.000001');
  });
  test('', () => {
    const result = math(1e-3).div(1e-3).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).div(3).value();
    expect(result).toEqual('0.333333');
  });
  test('', () => {
    const result = math(0.1).div(1e5).value();
    expect(result).toEqual('0.000001');
  });
  test('', () => {
    const result = math(1e-2).div(1e-2).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(0).div(1e-7).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(10000).div('123').value();
    expect(result).toEqual('81.300813');
  });
  test('', () => {
    const result = math(1).div(1).div(1).div(1).div(1).div(1).div(1).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).div(10).div(10).div(10).div(10).div(10).value();
    expect(result).toEqual('0.00001');
  });
  test('', () => {
    const result = math('0.155062399728289').div(-0.1589).value();
    expect(result).toEqual('-0.975848');
  });
  test('', () => {
    const result = math(1.1).div(1.2).value();
    expect(result).toEqual('0.916666');
  });
  test('', () => {
    const result = math(undefined).div(99999999).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(null).div(1).value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math('999999999').div('-0.0001').value();
    expect(result).toEqual('-9999999990000');
  });
  test('', () => {
    const result = math('27.258901').div('20.529702').value();
    expect(result).toEqual('1.327778');
  });
  test('', () => {
    const result = math('0.000476').div('-0.158153').value();
    expect(result).toEqual('-0.003009');
  });
  test('', () => {
    const result = math('122.701132').div('777.245032').value();
    expect(result).toEqual('0.157866');
  });
  test('', () => {
    const result = math('0.157866730501019143').div('777.245032').value();
    expect(result).toEqual('0.000203');
  });
  test('', () => {
    const result = math('1.0003767627176685').div(3.90169139033e-7).value();
    expect(result).toEqual('2563956.660429');
  });
  test('', () => {
    const result = math('5234.6942385637').div('34.84190235278222').value();
    expect(result).toEqual('150.241344');
  });
  test('', () => {
    const result = math(-1).div(-1).div(-1).value();
    expect(result).toEqual('-1');
  });

  // Complex expressions
  test('', () => {
    const result = math(2).pow(3).mul(4).div(2).add(5).value();
    expect(result).toEqual('21');
  });
  test('', () => {
    const result = math(0.1).add(0.2).mul(10).value();
    expect(result).toEqual('3');
  });
  test('', () => {
    const result = math(10).div(3).mul(3).sub(1).value();
    expect(result).toEqual('8.999999');
  });
  test('', () => {
    const result = math(2).add(3).mul(4).div(2).pow(2).value();
    expect(result).toEqual('100');
  });
  test('', () => {
    const result = math(5).pow(2).sub(3).value();
    expect(result).toEqual('22');
  });
  test('', () => {
    const result = math(2).add(3).mul(4).add(5).value();
    expect(result).toEqual('25');
  });
  test('', () => {
    const result = math(100).div(2).div(5).value();
    expect(result).toEqual('10');
  });
  test('', () => {
    const result = math(2).mul(3).mul(4).div(6).value();
    expect(result).toEqual('4');
  });
  test('', () => {
    const result = math(2).add(3).mul(math(4).div(2).value()).value();
    expect(result).toEqual('10');
  });
  test('', () => {
    const result = math(-2).mul(-3).add(-4).div(-2).value();
    expect(result).toEqual('-1');
  });
  test('', () => {
    const result = math(1.234).mul(2.345).value(2);
    expect(result).toEqual('2.89');
  });
  test('', () => {
    const result = math(10).sub(5).mul(2).value();
    expect(result).toEqual('10');
  });
  test('', () => {
    const result = math(1e10).mul(2).add(1).value();
    expect(result).toEqual('20000000001');
  });
  test('', () => {
    const result = math(-2).pow(3).value();
    expect(result).toEqual('-8');
  });
  test('', () => {
    const result = math(1000000).div(100000).value();
    expect(result).toEqual('10');
  });
  test('', () => {
    const result = math(1.23456789).add(2.3456789).value(4);
    expect(result).toEqual('3.5802');
  });
  test('', () => {
    const result = math(2).mul(3).pow(2).value();
    expect(result).toEqual('36');
  });
  test('', () => {
    const result = math(10.456789).sub(5.123456).value(2);
    expect(result).toEqual('5.33');
  });
  test('', () => {
    const result = math(2).add(3).mul(4).pow(2).value();
    expect(result).toEqual('400');
  });
  test('', () => {
    const result = math(2).pow(-10).value();
    expect(result).toEqual('0.000976');
  });

  // Floor
  test('', () => {
    const result = math(1.23456789).value(3);
    expect(result).toEqual('1.234');
  });
  test('', () => {
    const result = math(1.23456789).mul(2).value(0);
    expect(result).toEqual('2');
  });

  // Greater than equal
  test('', () => {
    const result = math(1).gte(1);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).gte(0.9);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).gte(1.1);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).gte(-1.1);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).gte(1e-3);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).gte(-1e-3);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1e19).gte(1e3);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(-1).gte(-2);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(0).gte(0);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(0).gte(-999999);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1000).gte(1000);
    expect(result).toEqual(true);
  });

  // Greater than
  test('', () => {
    const result = math(1).gt(1);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).gt(0.9);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).gt(1.1);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).gt(-1.1);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).gt(1e-7);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).gt(-1e-7);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(10000).gt(9999);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(-1).gt(-2);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(0).gt(0);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(0).gt(-999999);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(10000).gt(10000);
    expect(result).toEqual(false);
  });

  // Less than equal
  test('', () => {
    const result = math(1).lte(1);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).lte(0.9);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).lte(1.1);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).lte(-1.1);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).lte(1e-7);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).lte(-1e-7);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(10000).lte(9999);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(-1).lte(-2);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(0).lte(0);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(0).lte(-999999);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1000).lte(1000);
    expect(result).toEqual(true);
  });

  // Less than
  test('', () => {
    const result = math(1).lt(1);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).lt(0.9);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).lt(1.1);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).lt(-1.1);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).lt(1e-7);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1).lt(-1e-7);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(1000).lt(1000);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(-1).lt(-2);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(0).lt(0);
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math(0).lt(-999999);
    expect(result).toEqual(false);
  });

  // Equal
  test('', () => {
    const result = math(1).eq(1);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(1).eq('1');
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(0).eq('1');
    expect(result).toEqual(false);
  });
  test('', () => {
    const result = math('0').eq(0);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math('1e-7').eq(1e-7);
    expect(result).toEqual(true);
  });
  test('', () => {
    const result = math(-0.00000000001).eq('-0.00000000001');
    expect(result).toEqual(true);
  });

  // Absolute
  test('', () => {
    const result = math(-0.000001).abs().value();
    expect(result).toEqual('0.000001');
  });
  test('', () => {
    const result = math(1).mul(-1).abs().value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).mul(-1).mul(-1).abs().value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(1).mul(0).mul(-1).abs().value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(0).abs().value();
    expect(result).toEqual('0');
  });
  test('', () => {
    const result = math(-1).abs().value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math('-1000').abs().value();
    expect(result).toEqual('1000');
  });
  test('', () => {
    const result = math(1000).abs().value();
    expect(result).toEqual('1000');
  });

  // Power
  test('', () => {
    const result = math(1).add(2).pow(3).value();
    expect(result).toEqual('27');
  });
  test('', () => {
    const result = math(0.1).pow(3).value();
    expect(result).toEqual('0.001');
  });
  test('', () => {
    const result = math(1e-3).pow(2).value();
    expect(result).toEqual('0.000001');
  });
  test('', () => {
    const result = math(1e6).pow(3).value();
    expect(result).toEqual('1000000000000000000');
  });
  test('', () => {
    const result = math(-1).pow(2).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(-1).pow(11).value();
    expect(result).toEqual('-1');
  });
  test('', () => {
    const result = math(1.0001).pow(1000).value();
    expect(result).toEqual('1.105165');
  });
  test('', () => {
    const result = math(1.0001).pow(-1000).value();
    expect(result).toEqual('0.904841');
  });
  test('', () => {
    const result = math(2).pow(0).value();
    expect(result).toEqual('1');
  });
  test('', () => {
    const result = math(2).pow(-1).value();
    expect(result).toEqual('0.5');
  });
});
