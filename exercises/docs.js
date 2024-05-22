// exercises/docs.js

// Instructions:
// 1. The function below calculates the average of an array of numbers.
// 2. It lacks proper documentation.
// 3. Use GitHub Copilot's inline chat to generate comprehensive documentation for this function.
// 4. Ask Copilot to explain what the function does, its parameters, and its return value.

// A function to calculate the average of an array of numbers
function calculateAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

module.exports = calculateAverage;
