function validateLoginForm() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    var isValid = true;
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    
    console.log("Validation is working");

    usernameError.textContent = "";
    passwordError.textContent = "";

    // Validate username
    if (username === "") {
    isValid = false;
    usernameError.textContent = "Username is required";
    }
      // Validate password
    if (password === "") {
      isValid = false;
      passwordError.textContent = "Password is required";
    }

    return isValid;
  }
  function handleFormSubmission(event) {
    // Prevent default form submission
    event.preventDefault();

    // Validate form
    var isValidForm = validateLoginForm();

    // If form is valid, redirect to another page
    if (isValidForm) {
      window.location.href = "user/user.html";
    }
  }

  document.getElementById("login-form").addEventListener("submit", handleFormSubmission);
