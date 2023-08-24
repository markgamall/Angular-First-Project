const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' },
  // Add more users as needed
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if user exists in local storage (users array)
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ message: `Welcome, ${user.username}!` });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
