This is our Assignments for COSC 4353

Front end must include following components:
- Login (Allow Client to register if not a client yet)
- Client Registration (Initially only username and Password)
- Client Profile Management (After client registers they should login first to complete the profile). Following fields will be on Profile page / form:
	- Full Name (50 characters, required)
	- Address 1 (100 characters, required)
	- Address 2 (100 characters, optional)
	- City (100 characters, required)
	- State (Drop Down, selection required) DB will store 2 character state code
	- Zipcode (9 characters, at least 5 character code required)
	
- Fuel Quote Form with following fields: (We are not building pricing module yet)
	- Gallons Requested (numeric, required)
	- Delivery Address (Non-editable, comes from client profile)
	- Delivery Date (Calender, date picker)
	- Suggested Price / gallon (numeric non-editable, price will be calculated by Pricing Module - we are not building pricing module yet)
	- Total Amount Due (numeric non-editable, calculated (gallons * price))
	
- Fuel Quote History
	- Tabular display of all client quotes in the past. All fields from Fuel Quote are displayed.

- You should have validations in place for required fields, field types, and field lengths. 

- NOTE: Only provide a word / pdf doc. You should use GitHub for your group collaboration and code.

Answer these questions:

1. Provide link to GitHub repository for TAs to view the code? (1 point)

### Group 8:
https://github.com/Angel-Sharma/COSC4353/tree/8bccea7678df68ab2b7428fe8b0dd63b29b4a9ed/Assignment%202

2. Discuss if your design and development methodology has changed since assignment 1 and why? (1 point)

### Group 8:

Our design and development has not changed we are still using the Agile method because it allows us to complete each feature quickly and properly.

3. List what front end technologies you are using and why. List who is responsible of doing what in your group? (2 points)

### Group 8:
We are using Html, CSS and Javscript, Nodejs, express, postgresql

4. Provide screen shots of your front end, each page? (5 points)

5. Contributions / who did what

### Suryansh Sharma
looked into how we will accomplish the next step of the project and what type of framwork we should use to further integrate the HTML and CSS with the backend which is probably the next part, redid registration form and validation.
