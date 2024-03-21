const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const port = 3000;

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  // Add more users as needed
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'resources', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'resources', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'resources', 'register.html'));
});


app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'resources', 'index.html'));
});


app.post('/login',(req,res) => {
  const {username, password} = req.body;

  //Check if username and password are entered
  if(!username || !password){
    return res.status(400).json({error: 'Username and Password are required'});
  }

  // check if username and password are correct
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  res.status(200).json({ message: 'Login successful', user });
  res.redirect('/user/user.html')
});

app.post('/register',(req,res) => {
  const {username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

      // Check if the user already exists in the database
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    users.push({ username, password });
    res.status(201).json({ message: 'Registration successful' });
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});