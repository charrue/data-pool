import {
  PRINTABLE_CODE_FIRST,
  PRINTABLE_CODE_LAST,
  DIGIT_CODE_FIRST,
  DIGIT_CODE_LAST,
  UPPERCASE_CODE_FIRST,
  UPPERCASE_CODE_LAST,
  LOWERCASE_CODE_FIRST,
  LOWERCASE_CODE_LAST,
} from "@charrue/toolkit";
import { number } from "../number";

type CharacterCategory = "all" | "digit" | "uppercase" | "lowercase" | "letter" | "alphanumeric";

const UppercaseCharPoints = Array
  .from({ length: 26 })
  .map((_, index) => index + UPPERCASE_CODE_FIRST);
const LowercaseCharPoints = Array
  .from({ length: 26 })
  .map((_, index) => index + LOWERCASE_CODE_FIRST);
const DigitCharPoints = Array.from({ length: 10 }).map((_, index) => index + DIGIT_CODE_FIRST);
const LetterCharPoints = [...UppercaseCharPoints, ...LowercaseCharPoints];
const AlphanumericCharPoints = [
  ...UppercaseCharPoints,
  ...LowercaseCharPoints,
  ...DigitCharPoints,
];

const STRING_MAX_LENGTH = 2 ** 20;
const defaultStringLength = 20;
const getRandomCharCode = (category: CharacterCategory) => {
  if (category === "digit") {
    return number({ min: DIGIT_CODE_FIRST, max: DIGIT_CODE_LAST });
  }
  if (category === "uppercase") {
    return number({ min: UPPERCASE_CODE_FIRST, max: UPPERCASE_CODE_LAST });
  }
  if (category === "lowercase") {
    return number({ min: LOWERCASE_CODE_FIRST, max: LOWERCASE_CODE_LAST });
  }
  if (category === "letter") {
    return LetterCharPoints[number({ min: 0, max: LetterCharPoints.length - 1 })];
  }
  if (category === "alphanumeric") {
    return AlphanumericCharPoints[number({ min: 0, max: AlphanumericCharPoints.length - 1 })];
  }
  return number({ min: PRINTABLE_CODE_FIRST + 1, max: PRINTABLE_CODE_LAST - 1 });
};

/**
 * @description 返回长度小于等于 length 的字符串
 * @param options 字符串最大长度，默认是20
 * @param options.length 字符串最大长度
 * @param options.type 字符类型
 *
 * @returns { string }
 * @example
 * string() // "W#7xI?/_BV"
 * number({ length: 20 }) // "^+jUpBGBA.On&pB@7;c5"
 * number({ length: 20, type: "letter" }) // "gicaIsjnqytahaSSEOkS"
 */
export const string = (
  options?: number | { length?: number; type?: CharacterCategory },
) => {
  let length = STRING_MAX_LENGTH;
  let type: CharacterCategory = "all";

  if (typeof options === "number") {
    length = options;
  } else {
    length = options?.length ?? defaultStringLength;
    type = options?.type ?? "all";
  }
  length = Math.min(length, STRING_MAX_LENGTH);
  let returnString = "";

  for (let i = 0;i < length;i++) {
    returnString += String.fromCharCode(getRandomCharCode(type));
  }

  return returnString;
};
