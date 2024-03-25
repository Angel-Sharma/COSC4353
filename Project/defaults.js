const User = require("./models/user");
const path = require("path");

// Used to get paths associated with the project as constants
// Example: `PATHS.get("INDEX")` will obtain the path for `/` or the index.
const PATHS = (function () {
  const name = {
    INDEX: "index.html",
    LOGIN: "login.html",
    REGISTER: "register.html",
    USER: "user/user.html",
    USER_UPDATE: "user/update.html",
    QUOTE: "quote/quote.html",
    QUOTE_HISTORY: "quote/history.html",
  };

  return {
    get: function (filename) {
      return path.join(__dirname + "/public/resources/" + name[filename]);
    },
  };
})();

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
  PATHS,
  accounts,
  users,
};
