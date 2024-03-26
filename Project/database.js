const User = require("./models/user");
const Quote = require("./models/quote");
const Account = require("./models/account");

// Temporary values, these will exist within database later.
// Account information for authentication.
let ACCOUNTS = {
  user1: new Account("user1", "password1"),
  user2: new Account("user2", "password2"),
};

// Temporary values, these will exist within database later.
// Users / profile data for individual users.
let USERS = {
  user1: new User("John Doe", "1234 Some St.", "", "Houston", 77002, "TX"),
  user2: new User("John Doe2", "1234 Some St.", "", "Houston", 77002, "TX"),
};

// Temporary values, these will exist within database later.
// Quote data.
let QUOTES = {
  user1: {
    1: new Quote(1, 5.0, "1234 Some St.", "2024-03-25", 3.01, 200),
    2: new Quote(2, 3.0, "4321 Some St.", "2024-03-26", 3.21, 900),
  },
};

class Database {
  /// Used to create the database, normally a url is a destination to connect to.
  constructor(url = "localhost") {
    this.url = url;
  }

  // SELECT / Getters
  // This will query the database (backend) once hooked up to get the account data.
  get_account(username) {
    return ACCOUNTS[username];
  }

  // This will query the database (backend) once hooked up to get the user profile data.
  get_user(username) {
    return USERS[username];
  }

  // This will query the database (backend) once hooked up to get the quote data.
  get_quote(username, quote_id) {
    return QUOTES[username][quote_id];
  }

  // This will query the database (backend) once hooked up to get the historical quote data.
  get_history(username) {
    return QUOTES[username];
  }

  // INSERT / Create
  // This will insert into the database (backend) once hooked up to set the account data.
  insert_account(account) {
    if (account.username in ACCOUNTS) {
      // NOTE: Throw an error? It already exists.
      return;
    }

    ACCOUNTS[username] = account;
  }

  // This will insert into the database (backend) once hooked up to set the user profile data.
  insert_user(username, user) {
    if (username in USERS) {
      // NOTE: Throw an error? It already exists.
      return;
    }

    USERS[username] = user;
  }

  // This will insert into the database (backend) once hooked up to set the quote data.
  insert_quote(quote_id, quote) {
    if (quote_id in QUOTES) {
      // NOTE: Throw an error? It already exists.
      return;
    }

    QUOTES[quote_id] = quote;
  }

  // UPDATE
  // This will update into the database (backend) once hooked up to set the account data.
  update_account(account) {
    if (!(account.username in ACCOUNTS)) {
      // NOTE: Throw an error? It does not exist.
      return;
    }

    ACCOUNTS[username] = account;
  }

  // This will update into the database (backend) once hooked up to set the user profile data.
  update_user(username, user) {
    if (!(username in USERS)) {
      // NOTE: Throw an error? It does not exist.
      return;
    }

    USERS[username] = user;
  }

  // This will update into the database (backend) once hooked up to set the quote data.
  update_quote(quote_id, quote) {
    if (!(quote_id in QUOTES)) {
      // NOTE: Throw an error? It does not exist.
      return;
    }

    QUOTES[quote_id] = quote;
  }
}

module.exports = Database;
