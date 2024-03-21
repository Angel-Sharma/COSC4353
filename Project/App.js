const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const { accounts, users } = require("./defaults");
const { checkAuth } = require("./utils");
const User = require("./models/user");
const {
  post_update,
  get_update,
  get_user,
  get_profile,
} = require("./routes/user");
const app = express();
const port = 3000;

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
  res.sendFile(path.join(__dirname + "/public/resources/index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/resources/login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/resources/register.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/resources/index.html"));
});

app.get("/user", checkAuth, (req, res) => {
  get_user(req, res, path.join(__dirname + "/public/resources/user/user.html"));
});

app.get("/user/update", checkAuth, (req, res) => {
  get_update(
    req,
    res,
    path.join(__dirname + "/public/resources/user/update.html")
  );
});

app.get("/quote", checkAuth, (req, res) => {
  res.sendFile(path.join(__dirname + "/public/resources/quote/quote.html"));
});
app.get("/quote/history", checkAuth, (req, res) => {
  res.sendFile(path.join(__dirname + "/public/resources/quote/history.html"));
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

app.get("/api/user/profile", (req, res) => {
  get_profile(req, res);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
