//Dependecies
const express = require('express');
const app = express();
const port = 3005;

// Juurireitti
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//Parsitaan .json tiedosto tauluksi
app.get('/guestbook', function (req, res) {
  var data = require(__dirname + '/data/data.json');
  var results = '<table border="1"> ';

  //Loopin kasvatus ja luodaan table
  for (var i = 0; i < data.length; i++) {
      results +=
          '<tr>' +
          '<td>' + data[i].username + '</td>' +
          '<td>' + data[i].country + '</td>' +
          '<td>' + data[i].message + '</td>' +
          '</tr>';
  }
  //Näytetään taulukko
  res.send(results);
});

// Uuden viestin reitti
app.get('/message', function (req, res) {
  res.sendFile(__dirname + '/message.html');
})

app.post('/message', function (req, res) {
  // Load the existing data from a file and assign to an array (lista)
  const data = require(__dirname + '/data/data.json');

  //Uusi tieto
  const username = req.body.username
  const country = req.body.country
  const message = req.body.message;

  //Työnnetään viimeisin tieto .json listaan
  data.push({
      "username": username,
      "country": country,
      "message": message
  });

  // Convert the JSON object to a string format 
  var jsonStr = JSON.stringify(data);

  // Write data to a file
  fs.writeFile(__dirname + '/data/data.json', jsonStr, (err) => {
      if (err) throw err;

  })
  res.send("Saved the data to a file.");
});

//Virheilmoitus jos sivua ei löydy
app.get('*', function (req, res) {
  res.send('Sivua ei löydy', 404);
});
//Servu toimii portilla 3005
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
