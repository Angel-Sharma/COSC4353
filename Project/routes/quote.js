const Quote = require("../models/quote");
const { getToday } = require("../utils");

// Processes GET requests to the `/api/quote/history` route.
function api_get_history(db, req, res) {
  const username = req.session.user.username;
  const history = db.get_history(username);

  if (!req.session.user || !username || !history) {
    res.status(401).json({ error: "Not authenticated" });
  } else {
    res.status(200).json(history);
  }
}

// Processes GET requests to the `/api/quote/price` route.
function api_get_price(db, req, res) {
  const username = req.session.user.username;
  const price = db.get_price();

  if (!req.session.user || !username || !price) {
    res.status(401).json({ error: "Not authenticated" });
  } else {
    res.status(200).json(price);
  }
}

// Processes GET requests to the `/quote/history` route.
function get_history(req, res, html_path) {
  res.sendFile(html_path);
}

// Processes GET requests to the `/quote` route.
function get_quote(req, res, html_path) {
  res.sendFile(html_path);
}

// Processes POST requests to the `/quote` route.
function post_quote(db, req, res) {
  if (!req.session.user || !req.session.user.username) {
    return res.status(400).json({ error: "User has not authenticated." });
  }

  // Username for the session.
  const username = req.session.user.username;

  // User and Form data.
  const user = db.get_user(username);
  let { gallons, date } = req.body;
  if (!date) {
    date = getToday();
  }

  gallons = parseInt(gallons);
  price = parseFloat(db.get_price().price);

  if (isNaN(gallons) || isNaN(price)) {
    return res.status(400).json({ error: "Invalid data provided." });
  }

  // Create new quote.
  const quote_id = db.get_history(username).length ?? 0;
  db.insert_quote(
    username,
    new Quote(quote_id, gallons, user.fullAddress, date, price)
  );

  res.redirect("/quote/history");
}

module.exports = {
  api_get_history,
  api_get_price,
  get_history,
  get_quote,
  post_quote,
};
