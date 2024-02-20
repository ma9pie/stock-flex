import Big from 'big.js';

type Num = number | string | undefined | null;

/**
 * 숫자를 문자열로 변환
 * 1e7 => "10000000"
 * 1e-7 => "0.0000001"
 */
export const numberToString = (num: Num) => {
  if (!num || isNaN(Number(num))) {
    return '0';
  }
  return new Big(num).toFixed();
};

/**
 * 숫자 정수 부분의 0 값을 trim
 * "00000.012" -> "0.012"
 */
export const trimZero = (value: string) => {
  const regex = /^0*(\d+)(\.\d+)?0*$/;
  return value.replace(regex, '$1$2');
};

/**
 * 콤마 추가
 * 1000000 => "1,000,000"
 */
export const comma = (num: Num, precision?: number) => {
  let value = numberToString(num).split('.');
  if (precision !== undefined && value[1]) {
    value[1] = value[1].substring(0, precision);
  }
  value[0] = value[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (Number(value[1]) !== 0 && value[1]) {
    return value.join('.');
  }
  return value[0];
};

/**
 * 콤마 제거
 * "1,000,000" => "1000000"
 */
export const decomma = (num: Num) => {
  if (!num) {
    return '0';
  }
  const _num = num.toString().replace(/,/g, '');
  if (isNaN(Number(_num))) {
    return '0';
  }
  return new Big(_num).toFixed();
};

/**
 * 소수점 버림 처리
 * floor(0.1234,2) => "0.12"
 */
export const floor = (num: Num, precision?: number) => {
  const value = numberToString(num);
  let [integer, digits] = value.split('.');
  if (precision === 0) return integer;
  digits = digits && precision ? digits.slice(0, precision) : digits;
  return digits === undefined ? integer : `${integer}.${digits}`;
};
