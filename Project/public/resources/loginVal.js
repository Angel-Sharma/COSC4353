function handleFormSubmission(event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Send POST request to server with form data
  fetch('/login.html', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    if (data.message === 'Login successful') {
      // Redirect to user.html
      window.location.href = '/public/resources/user/user.html';
    } else {
      // Handle login error (e.g., display error message)
      console.error('Login failed:', data.error);
    }
  })
  .catch(error => {
    // Handle fetch error
    console.error('Error:', error);
  });
}

document.getElementById('login-form').addEventListener('submit', handleFormSubmission);
