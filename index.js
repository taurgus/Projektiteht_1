const express = require('express');
const app = express();
const port = 3005;

// Route: /
app.get('/', (req, res) => {
  res.send('Questbookki');
});

// Route: /guestbook
app.get('/guestbook', (req, res) => {
  res.send('Welcome to the guestbook!');
});

// Route: /newmessage
app.get('/newmessage', (req, res) => {
  res.send('Create a new message');
});

// Route: /ajaxmessage
app.get('/ajaxmessage', (req, res) => {
  res.send('Handle AJAX request for messages');
});

app.get('*', function (req, res) {
  res.send('Cant find the requested page', 404);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
