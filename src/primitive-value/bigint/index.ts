import { number } from "../number";

export const bigint = (value?: string | number | bigint): bigint => {
  if (value === undefined) {
    value = Math.floor(number() * 99999999999) + 10000000000;
  }

  return BigInt(value);
};
