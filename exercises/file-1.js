// exercises/file-1.js

// This file contains a function that fetches user data and processes it

const fetchUserData = require("./file-2");
const processUserData = require("./file-3");

function handleUserData(userId) {
  const userData = fetchUserData(userId);
  return processUserData(userData);
}

module.exports = handleUserData;
