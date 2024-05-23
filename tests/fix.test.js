const { getFirstElement } = require("../exercises/fix");

test("getFirstElement should return the first element of the array", () => {
  const arr = [1, 2, 3];
  const result = getFirstElement(arr);
  expect(result).toBe(1);
});

test("getFirstElement should return undefined if the array is empty", () => {
  const arr = [];
  const result = getFirstElement(arr);
  expect(result).toBeUndefined();
});

test("getFirstElement should return the first element even if it is falsy", () => {
  const arr = [null, undefined, false, 0, "", NaN];
  const result = getFirstElement(arr);
  expect(result).toBeNull();
});
