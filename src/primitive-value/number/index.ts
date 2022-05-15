import { randomNumber } from "../random";

const MIN_AND_MAX_RANGE = 99999;

/**
 * @description 返回一个介于[min, max]的数字，可以指定其精度
 * @param options 随机数的最大值
 * @param options.min 最小值，默认是0
 * @param options.max 最大值，默认是 `min + 99999`
 * @param options.precision 数字精度，接受一个小数，默认是1
 *
 * @returns { number }
 * @example
 * number() // 124
 * number({ min: 10, max: 20 }) // 15
 * number({ min: 10, max: 20, precision: 0.01 }) // 15.03
 */
export const number = (options?: number | { min?: number; max?: number; precision?: number }) => {
  let min = 0;
  let precision = 1;
  let max = min + MIN_AND_MAX_RANGE;
  if (typeof options === "number") {
    max = options;
  } else {
    min = options?.min ?? min;
    precision = options?.precision ?? precision;
    max = options?.max ?? min + MIN_AND_MAX_RANGE;
  }

  min = Math.min(min, max);
  max = Math.max(min, max);

  if (min === max) return min;

  const randNum = Math.floor(
    randomNumber(
      min / precision,
      max / precision + 1,
    ),
  );

  return randNum / (1 / precision);
};
