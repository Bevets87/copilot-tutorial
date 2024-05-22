// exercises/unit-tests.js

// Instructions:
// 1. The function below reverses a string.
// 2. It lacks unit tests.
// 3. Use GitHub Copilot's inline chat to generate comprehensive unit tests for this function.
// 4. Ensure that the tests cover a variety of cases, including edge cases.

/**
 * Reverses a given string.
 *
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

module.exports = reverseString;
