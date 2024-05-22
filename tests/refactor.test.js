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

  test("performance comparison of original and refactored factorial", () => {
    const start = performance.now();
    for (let i = 0; i < 10000; i++) {
      factorial(20);
    }
    const end = performance.now();
    console.log(`Original factorial time: ${end - start}ms`);

    // Refactor the function using optimal recursion
    function factorialRecursive(n) {
      if (n === 0 || n === 1) {
        return 1;
      }
      return n * factorialRecursive(n - 1);
    }

    const startRefactor = performance.now();
    for (let i = 0; i < 10000; i++) {
      factorialRecursive(20);
    }
    const endRefactor = performance.now();
    console.log(`Refactored factorial time: ${endRefactor - startRefactor}ms`);

    // Optional: Compare performance times
    expect(endRefactor - startRefactor).toBeLessThan(end - start);
  });
});
