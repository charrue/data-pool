import { describe, test, expect } from "vitest";
import { number } from "./index";

const forEach = (callback: () => void) => {
  for (let i = 0;i < 10;i++) {
    callback();
  }
};

describe("number", () => {
  test("number()", () => {
    forEach(() => {
      const num = number();
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(99999);
    });
  });
  test("number(num)", () => {
    forEach(() => {
      const num = number(10);
      console.log(num);
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(10);
    });
  });

  test("number(negative number)", () => {
    forEach(() => {
      const num = number(-10);
      expect(num).toBeGreaterThanOrEqual(-10);
      expect(num).toBeLessThanOrEqual(99999 - 10);
    });
  });
  test("number({ min })", () => {
    forEach(() => {
      const num = number({ min: 200 });
      expect(num).toBeGreaterThanOrEqual(200);
      expect(num).toBeLessThanOrEqual(99999 + 200);
    });
  });

  test("number({ min, max })", () => {
    forEach(() => {
      const num = number({ min: 200, max: 300 });
      expect(num).toBeGreaterThanOrEqual(200);
      expect(num).toBeLessThanOrEqual(300);
    });
  });

  test("number({ min, max: min })", () => {
    forEach(() => {
      const num = number({ min: 200, max: 200 });
      expect(num).toBe(200);
    });
  });

  test("number({ min, max, precision })", () => {
    forEach(() => {
      const num = number({ min: 200, max: 300, precision: 0.01 });

      expect(
        num.toString().split(".")[1].length,
      )
        .toBeLessThanOrEqual(2);
      expect(num).toBeGreaterThanOrEqual(200);
      expect(num).toBeLessThanOrEqual(300);
    });
  });

  test("min > max", () => {
    forEach(() => {
      const num = number({ min: 300, max: 200 });
      expect(num).toBeGreaterThanOrEqual(200);
      expect(num).toBeLessThanOrEqual(300);
    });
  });
});
