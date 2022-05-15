import { describe, test, expect } from "vitest";
import { string } from "./index";
import {
  isAlphanumeric,
  isDigitCode,
  isLetterCode,
  isLowerCaseCode,
  isPrintableCode,
  isUpperCaseCode,
} from "@charrue/toolkit";

const forEach = (callback: () => void) => {
  for (let i = 0;i < 10;i++) {
    callback();
  }
};

describe("string", () => {
  test("string()", () => {
    forEach(() => {
      expect(typeof string()).toBe("string");

      expect(string().length).toBeGreaterThan(0);
      expect(string().length).toBeLessThanOrEqual(20);
    });
  });

  test("string(num)", () => {
    forEach(() => {
      const str = string(10);
      expect(str.length).toBeGreaterThan(0);
      expect(str.length).toBeLessThanOrEqual(10);
    });
  });

  test("string({ length: 20 })", () => {
    forEach(() => {
      const str = string({ length: 20 });
      expect(str.length).toBeGreaterThan(0);
      expect(str.length).toBeLessThanOrEqual(20);
    });
  });

  test("string({ length: 20, type: 'all' })", () => {
    forEach(() => {
      const str = string({ length: 20, type: "all" });
      expect(str.split("").every(isPrintableCode)).toBe(true);
    });
  });

  test("string({ length: 20, type: 'digit' })", () => {
    forEach(() => {
      const str = string({ length: 20, type: "digit" });
      expect(str.split("").every(isDigitCode)).toBe(true);
    });
  });

  test("string({ length: 20, type: 'uppercase' })", () => {
    forEach(() => {
      const str = string({ length: 20, type: "uppercase" });
      expect(str.split("").every(isUpperCaseCode)).toBe(true);
    });
  });

  test("string({ length: 20, type: 'lowercase' })", () => {
    forEach(() => {
      const str = string({ length: 20, type: "lowercase" });
      expect(str.split("").every(isLowerCaseCode)).toBe(true);
    });
  });

  test("string({ length: 20, type: 'letter' })", () => {
    forEach(() => {
      const str = string({ length: 20, type: "letter" });
      expect(str.split("").every(isLetterCode)).toBe(true);
    });
  });

  test("string({ length: 20, type: 'alphanumeric' })", () => {
    forEach(() => {
      const str = string({ length: 20, type: "alphanumeric" });
      expect(str.split("").every(isAlphanumeric)).toBe(true);
    });
  });
});
