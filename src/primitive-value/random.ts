import RandomGen from "./mersenne-twister";

const randomGen = new RandomGen();
randomGen.initGenrand(new Date().getTime() % 1000000000);

/**
 * @description 生成一个[min, max)之间的随机数
 * @param min 最小值
 * @param max 最大值
 * @returns { number }
 * @example
 * randomNumber() // 14356
 * randomNumber(10, 20) // 15
 * randomNumber(100, 20) // 72
 */
export const randomNumber = (min = 0, max = 32768) => {
  min = Math.min(min, max);
  max = Math.max(min, max);

  return Math.floor(randomGen.genrandReal2() * (max - min) + min);
};
