const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const PATHS = require("./defaults");
const Database = require("./database");
const Account = require("./models/account");
const { checkAuth } = require("./utils");
const {
  post_update,
  get_update,
  get_user,
  api_get_user,
} = require("./routes/user");
const {
  api_get_history,
  api_get_price,
  get_quote,
  post_quote,
  get_history,
} = require("./routes/quote");

// Globals
const app = express();
const db = new Database();
const PORT = 3000; // Port number used to connect to the application.
const nologin_user = "user1";
const nologin = process.argv.includes("--nologin");
if (nologin) {
  console.log(`Running with '--nologin', default user: ${nologin_user}`);
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Session configuration. Not very secure, for testing.
app.use(
  session({
    secret: "cosc4353", // Obviously not secure right here.
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.get("/", (req, res) => {
  res.sendFile(PATHS.get("INDEX"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(PATHS.get("INDEX"));
});

app.get("/login", (req, res) => {
  if (nologin) {
    req.session.user = { username: nologin_user };
    res.redirect("/user");
  } else {
    res.sendFile(PATHS.get("LOGIN"));
  }
});

app.get("/register", (req, res) => {
  res.sendFile(PATHS.get("REGISTER"));
});

app.get("/user", checkAuth, (req, res) => {
  get_user(req, res, PATHS.get("USER"));
});

app.get("/user/update", checkAuth, (req, res) => {
  get_update(req, res, PATHS.get("USER_UPDATE"));
});

app.get("/quote", checkAuth, (req, res) => {
  get_quote(req, res, PATHS.get("QUOTE"));
});

app.get("/quote/history", checkAuth, (req, res) => {
  get_history(req, res, PATHS.get("QUOTE_HISTORY"));
});

app.get("/api/user/profile", (req, res) => {
  api_get_user(db, req, res);
});

app.get("/api/quote/history", (req, res) => {
  api_get_history(db, req, res);
});

app.get("/api/quote/price", (req, res) => {
  api_get_price(db, req, res);
});

app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  //Check if username and password are entered
  if (!nologin && (!username || !password)) {
    return res
      .status(400)
      .json({ error: "Username and Password are required" });
  } else if (nologin) {
    username = nologin_user;
    password = "password1";
  }

  // check if username and password are correct
  const account = db.get_account(username);
  if (!account || account.password != password) {
    return res.status(401).json({ error: "Invalid username or password" });
  } else {
    req.session.user = { username };
    res.redirect("/user");
  }
});

app.post("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  // Check if username and password are provided
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  function startsWithCapitalLetter(str) {
    return /^[A-Z]/.test(str);
  }

  // Check if the user already exists in the database
  const user = db.get_account(username);
  const requiredLength = username.length <= 8 || password.length <= 8;
  const beginsWithCapitalLetter = accounts.find((u) =>
    startsWithCapitalLetter(u.password)
  );

  if (user) {
    return res.status(400).json({ error: "Username already exists" });
  } else if (requiredLength) {
    return res
      .status(400)
      .json({ error: "This username or password is too short" });
  } else {
    db.insert_account(new Account(username, password));
    res.redirect("/login");
  }
});

app.post("/user/update", (req, res) => {
  post_update(db, req, res);
});

app.post("/quote", (req, res) => {
  post_quote(db, req, res);
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
