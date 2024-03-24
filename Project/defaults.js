const User = require("./models/user");

// All valid username / password accounts for users.
const accounts = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  // Add more users as needed
];

// Used to lookup users until a backend is added.
const users = {
  user1: new User("John Doe", "1234 Some St.", "", "Houston", 77002, "TX"),
  user2: new User("John Doe2", "1234 Some St.", "", "Houston", 77002, "TX"),
};

module.exports = {
  accounts,
  users,
};
