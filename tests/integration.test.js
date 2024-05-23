// tests/integration.test.js

const handleUserData = require("../exercises/file-1");

test("handles valid user data correctly", () => {
  const result = handleUserData(1);
  expect(result).toBe("User John Doe is 30 years old.");
});
