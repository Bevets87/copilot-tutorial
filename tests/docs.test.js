// tests/docs.test.js

const fs = require("fs");
const path = require("path");
const calculateAverage = require("../exercises/docs");

describe("calculateAverage function", () => {
  test("calculates the average of [1, 2, 3, 4, 5] correctly", () => {
    expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
  });

  test("calculates the average of [10, -10, 10, -10, 10] correctly", () => {
    expect(calculateAverage([10, -10, 10, -10, 10])).toBe(2);
  });

  test("calculates the average of an empty array as 0", () => {
    expect(calculateAverage([])).toBe(0);
  });

  test("calculates the average of [5] correctly", () => {
    expect(calculateAverage([5])).toBe(5);
  });

  test("function has comments", () => {
    const filePath = path.join(__dirname, "../exercises/docs.js");
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const hasComments = /\/\*\*[\s\S]*?\*\//.test(fileContent);
    expect(hasComments).toBe(true);
  });
});
