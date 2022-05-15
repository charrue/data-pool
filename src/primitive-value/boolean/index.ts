import { number } from "../number";

/**
 * @description 返回一个布尔值
 *
 * @example
 * boolean() // true
 * boolean() // false
 */
export const boolean = () => !!number(1);
