// exercises/fix.js

// Instructions:
// 1. The function below is supposed to calculate the sum of an array of numbers.
// 2. It contains a bug that causes it to return the wrong result in some cases.
// 3. Use GitHub Copilot's inline chat to identify and fix the bug.
// 4. Ask Copilot to explain what the bug was and how the fix resolves it.

// A function to calculate the sum of an array of numbers
function sumArray(arr) {
  let sum = 0;
  for (let i = 1; i <= arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Instructions:
// 1. The function below is supposed to return the first element of an array.
// 2. It contains a bug that causes it to return the second element instead.
// 3. Use GitHub Copilot's sparkle icon to fix the bug.
// 4. Ask Copilot to explain what the bug was and how the fix resolves it.

// A function to return the first element of an array
function getFirstElement(arr) {
  return arr.[0];
}

exports.sumArray = sumArray;
exports.getFirstElement = getFirstElement;
