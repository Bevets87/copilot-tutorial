// exercises/file-2.js

// This file contains a function that fetches user data from a database

function fetchUserData(userId) {
  // Simulating fetching user data
  if (userId <= 0) {
    throw new Error("Invalid user ID");
  }
  //   return { id: userId, name: "John Doe", Age: 30 };
  return undefined;
}

module.exports = fetchUserData;
