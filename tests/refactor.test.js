// tests/refactor.test.js

const factorial = require("../exercises/refactor");

describe("factorial function", () => {
  test("calculates the factorial of 5 correctly", () => {
    expect(factorial(5)).toBe(120);
  });

  test("calculates the factorial of 0 correctly", () => {
    expect(factorial(0)).toBe(1);
  });

  test("calculates the factorial of 10 correctly", () => {
    expect(factorial(10)).toBe(3628800);
  });

  test("calculates the factorial of 20 correctly", () => {
    expect(factorial(20)).toBe(2432902008176640000);
  });
});
