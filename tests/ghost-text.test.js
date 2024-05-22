// tests/ghost-text.test.js

const findMax = require("../exercises/ghost-text");

describe("findMax function", () => {
  test("finds the maximum value in [1, 2, 3, 4, 5]", () => {
    expect(findMax([1, 2, 3, 4, 5])).toBe(5);
  });

  test("finds the maximum value in [-1, -2, -3, -4, -5]", () => {
    expect(findMax([-1, -2, -3, -4, -5])).toBe(-1);
  });

  test("finds the maximum value in [100, 0, -100]", () => {
    expect(findMax([100, 0, -100])).toBe(100);
  });
});
