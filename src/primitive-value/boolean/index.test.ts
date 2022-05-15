import { describe, test, expect } from "vitest";
import { boolean } from "./index";

const forEach = (callback: () => void) => {
  for (let i = 0;i < 10;i++) {
    callback();
  }
};

describe("boolean", () => {
  test("boolean()", () => {
    forEach(() => {
      const bool = boolean();
      expect(typeof bool).toBe("boolean");
      expect([true, false].indexOf(bool)).toBeGreaterThan(-1);
    });
  });
});
