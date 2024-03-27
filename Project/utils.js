// Simple function used to check if the user is authenticated. Redirects to login page if not.
function checkAuth(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
}

// Obtains the current date in YYYY-MM-DD format.
function getToday() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

module.exports = { checkAuth, getToday };
