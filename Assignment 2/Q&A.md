# Assignment 2, COSC 4353

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
  - Total Amount Due (numeric non-editable, calculated (gallons \* price))
- Fuel Quote History

  - Tabular display of all client quotes in the past. All fields from Fuel Quote are displayed.

- You should have validations in place for required fields, field types, and field lengths.

- NOTE: Only provide a word / pdf doc. You should use GitHub for your group collaboration and code.

## Answer these questions:

### 1. Provide link to GitHub repository for TAs to view the code? (1 point)

https://github.com/Angel-Sharma/COSC4353/tree/8bccea7678df68ab2b7428fe8b0dd63b29b4a9ed/Assignment%202

### 2. Discuss if your design and development methodology has changed since assignment 1 and why? (1 point)

Our design and development has not changed we are still using the Agile method because it allows us to complete each feature quickly and properly. The design not changed because the idea is to keep it fairly basic and limit the complex interactions between technologies until there is a backend. This will prevent rework in the future.

### 3. List what front end technologies you are using and why. List who is responsible of doing what in your group? (2 points)

We are using Html, CSS and Javscript, Nodejs, express, postgresql. We opted to use the standard HTML and CSS for quick templating on this checkpoint for basic design of the website. This gives a flexbile base to expand into using more advance frameworks. (Ryan Ball) I worked on some of the frontend, however my strengths are on server-side technologies.

### 4. Provide screen shots of your front end, each page? (5 points)

### 5. Contributions / who did what

#### Suryansh Sharma

looked into how we will accomplish the next step of the project and what type of framwork we should use to further integrate the HTML and CSS with the backend which is probably the next part, redid registration form and validation.

#### Ryan Ball

I built out the original HTML pages and file-structure with relative pathing, this will have to be move to use endpoints once there is a backend to process the HTTP requests. Originally I implemented very basic input validation that was later expanded on by other teammates. I also contributed to the styling using CSS that was later expanded on by others to look infinitely better than my original implementation.

#### Benjamin 
Assisted in streamlining the selection of the front end technologies. Creating the dummy data for user profile.

#### Abhinav Krothapalli

I helped implement the state dropdown box in the profile update menu. After that, I did some work on the CSS files by adding colors, backgrounds, adjusting fonts and text boxes, and other small details to help the overall aesthetic of the project.
