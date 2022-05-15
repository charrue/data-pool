import { describe, test, expect } from "vitest";
import { bigint } from "./index";

const forEach = (callback: () => void) => {
  for (let i = 0;i < 10;i++) {
    callback();
  }
};

describe("boolean", () => {
  test("bigint()", () => {
    forEach(() => {
      const num = bigint();
      expect(typeof num).toBe("bigint");
    });
  });

  test("bigint(num)", () => {
    expect(bigint("9007199254740991")).toBe(BigInt("9007199254740991"));
  });
});
