const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const { accounts, PATHS } = require("./defaults");
const { checkAuth } = require("./utils");
const {
  post_update,
  get_update,
  get_user,
  get_profile,
} = require("./routes/user");
const { get_quote, post_quote, get_history } = require("./routes/quote");

// Globals
const app = express();
const PORT = 3000; // Port number used to connect to the application.

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
  res.sendFile(PATHS.get("LOGIN"));
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
  get_profile(req, res);
});

app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  //Check if username and password are entered
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and Password are required" });
  }

  // check if username and password are correct
  const user = accounts.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
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
  const existingUser = accounts.find((u) => u.username === username);
  const beginsWithCapitalLetter = accounts.find((u) =>
    startsWithCapitalLetter(u.password)
  );
  const requiredLength = accounts.find(
    (u) => u.username.length <= 8 && u.password.length <= 8
  );
  if (existingUser) {
    return res.status(400).json({ error: "Username already exists" });
  } else if (requiredLength) {
    return res
      .status(400)
      .json({ error: "This username or password is too short" });
  } else {
    accounts.push({ username, password });
    res.redirect("/login");
  }
});

app.post("/user/update", (req, res) => {
  post_update(req, res);
});

app.post("/quote", (req, res) => {
  post_quote(req, res);
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
