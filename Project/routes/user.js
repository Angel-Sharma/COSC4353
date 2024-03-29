const User = require("../models/user");

// Processes GET requests to the `/api/user/profile` route.
function api_get_user(db, req, res) {
  const username = req.session.user.username;
  const user = db.get_user(username);

  if (!req.session.user || !username || !user) {
    res.status(401).json({ error: "Not authenticated" });
  } else {
    res.status(200).json(user);
  }
}

// Processes GET requests to the `/user` route.
function get_user(req, res, html_path) {
  res.sendFile(html_path);
}

// Processes GET requests to the `/user/update` route.
function get_update(req, res, html_path) {
  res.sendFile(html_path);
}

// Processes POST requests to the `/user/update` route.
function post_update(db, req, res) {
  if (!req.session.user || !req.session.user.username) {
    return res.status(400).json({ error: "User has not authenticated." });
  }

  // Username for the session.
  const username = req.session.user.username;

  // Extract the values sent from the client.
  const { fullname, address1, address2, city, zipcode, state } = req.body;

  // Check that the required fields are present.
  if (!fullname || !address1 || !city || zipcode === undefined) {
    return res.status(400).json({
      error: "All fields are required except address2 and state.",
    });
  }

  // Check if the user exists, this would normally be sent to the backend.
  const user = db.get_user(username);
  if (!user) {
    return res.status(404).json({ error: "User profile not found" });
  }

  // Updates the user profile information.
  db.update_user(
    username,
    new User(fullname, address1, address2, city, zipcode, state)
  );

  // Redirect to the user profile.
  res.redirect("/user");
}

module.exports = {
  api_get_user,
  get_user,
  get_update,
  post_update,
};
