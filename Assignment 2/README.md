# Assignment 2

## Notes

- `user/update.html`, the State / Province field has not been implemented.
- CSS can be improved. `panel-container` is a class that can be used to place side-by-side panels. See `user/user.html` for an example.

## Proposed Structure

Below are proposed ideas of how to structure the website between HTML files and Endpoints.

### HTML

- `index.html` - Homepage, accessible from **/**
- `login.html` - Login Form
- `register.html` - Registration Form
- **/user**
  - `user.html` - User Homepage
  - `update.html` - Profile Update Form
- **/quote**
  - `quote.html` - Quote Create Form
  - `history.html` - Quote History Table

### Endpoints

- `/`
  - GET, displays `index.html`
- `/login`
  - GET, displays `login.html`
  - POST, Submits credentials.
- `/register`
  - GET, displays `register.html`
  - POST, Submits form data to register account.
- `/user`
  - GET, displays `user/user.html`
- `/user/update`
  - GET, displays `user/update.html`
  - POST, Submits form data to update account.
- `/quote`
  - GET, displays `quote/quote.html`
  - POST, Submits form data to create new quote.
- `/quote/history`
  - GET, displays `quote/history.html`
