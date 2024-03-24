// Simple function used to check if the user is authenticated. Redirects to login page if not.
function checkAuth(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
}

module.exports = { checkAuth };
