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

module.exports = PATHS;
