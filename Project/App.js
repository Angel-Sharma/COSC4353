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

app.use(bodyParser.urlencoded({extended : false }));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname +'/public/resources/index.html'));
});

app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/resources/login.html'));
});

app.get('/register.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/resources/register.html'));
});


app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/resources/index.html'));
});

app.get('/user.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/resources/user/user.html'));
});

app.get('/update.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/resources/user/update.html'));
});

app.get('/quote.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/resources/quote/quote.html'));
});
app.get('/history.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/resources/quote/history.html'));
});

app.post('/login.html',(req,res) => {
  let username = req.body.username;
  let password = req.body.password;
  //Check if username and password are entered
  if(!username || !password){
    return res.status(400).json({error: 'Username and Password are required'});
  }

  // check if username and password are correct
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  } else{
    res.redirect('/user.html')
  }
});

app.post('/register.html',(req,res) => {
    let username = req.body.username;  
    let password = req.body.password;
    // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
    function startsWithCapitalLetter(str) {
      return /^[A-Z]/.test(str);
    }

      // Check if the user already exists in the database
    const existingUser = users.find(u => u.username === username);
    const beginsWithCapitalLetter = users.find(u => startsWithCapitalLetter(u.password));
    const requiredLength = users.find(u => u.username.length <= 8 && u.password.length <= 8)
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    } else if(requiredLength){
      return res.status(400).json({ error: 'This username or password is too short' });
    }else{
      users.push({ username, password });
      res.redirect('/login.html')
    }


});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});