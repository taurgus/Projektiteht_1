//Dependecies
const express = require('express');
const app = express();
const port = 3005;

// Juurireitti
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


//Parse .json into a table
app.get('/guestbook', function (req, res) {
  var data = require(__dirname + '/data/data.json');

  var results = '<table border="1"> ';

  for (var i = 0; i < data.length; i++) {
      results +=
          '<tr>' +
          '<td>' + data[i].id + '</td>' +
          '<td>' + data[i].username + '</td>' +
          '<td>' + data[i].country + '</td>' +
          '<td>' + data[i].date + '</td>' +
          '<td>' + data[i].message + '</td>' +
          '</tr>';
  }

  res.send(results);
});




// Route: /newmessage
app.get('/newmessage', (req, res) => {
  res.send('Create a new message');

});


app.get('*', function (req, res) {
  res.send('Sivua ei löydy', 404);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
