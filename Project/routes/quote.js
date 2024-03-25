// Processes GET requests to the `/quote/history` route.
function get_history(req, res, html_path) {
  res.sendFile(html_path);
}

// Processes GET requests to the `/quote` route.
function get_quote(req, res, html_path) {
  res.sendFile(html_path);
}

// Processes POST requests to the `/quote` route.
function post_quote(req, res) {
  if (!req.session.user || !req.session.user.username) {
    return res.status(400).json({ error: "User has not authenticated." });
  }

  // Username for the session.
  const username = req.session.user.username;

  res.redirect("/quote");
}

module.exports = {
  get_history,
  get_quote,
  post_quote,
};
