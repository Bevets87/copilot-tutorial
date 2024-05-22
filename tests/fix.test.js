// tests/fix.test.js

const sumArray = require("../exercises/fix");

describe("sumArray function", () => {
  test("calculates the sum of [1, 2, 3, 4, 5] correctly", () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
  });

  test("calculates the sum of [10, -10, 10, -10, 10] correctly", () => {
    expect(sumArray([10, -10, 10, -10, 10])).toBe(10);
  });

  test("calculates the sum of an empty array correctly", () => {
    expect(sumArray([])).toBe(0);
  });

  test("calculates the sum of [5] correctly", () => {
    expect(sumArray([5])).toBe(5);
  });
});
