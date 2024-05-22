// exercises/refactor.js

// Instructions:
// 1. The function below calculates the factorial of a number using a loop.
// 2. Use GitHub Copilot's inline chat to refactor this function to use recursion instead.
// 3. Ask Copilot to explain the differences and benefits of the recursive approach.
// 4. Measure the performance of both the original and refactored functions to compare their efficiency.

// A function to calculate the factorial of a number
// Replace with a recursive approach

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

module.exports = factorial;
