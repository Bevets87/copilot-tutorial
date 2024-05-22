// tests/comments.test.js

const mergeArrays = require("../exercises/comments");

describe("mergeArrays function", () => {
  test("merges [1, 3, 5] and [2, 4, 6] into [1, 2, 3, 4, 5, 6]", () => {
    expect(mergeArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("merges [-5, 0, 5] and [-10, 10] into [-10, -5, 0, 5, 10]", () => {
    expect(mergeArrays([-5, 0, 5], [-10, 10])).toEqual([-10, -5, 0, 5, 10]);
  });

  test("merges empty arrays into an empty array", () => {
    expect(mergeArrays([], [])).toEqual([]);
  });
});
