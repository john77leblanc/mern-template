const express = require('express');


const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const fs = require('fs');
const path = require('path');


const port = process.env.PORT || 8081;
const publicDirectory = path.join(__dirname, '../public');

app.use(express.static(publicDirectory));
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(publicDirectory, '/index.html'));
});

app.get('/cities', (req, res) => {
  let data = JSON.parse(fs.readFileSync('db.json', 'utf8'));

  if (req.query.id) {
    data = data.find((i) => String(i.id) === String(req.query.id)) || 'Could not find ID.';
  }
  else if (req.query.name) {
    data = data.find((i) => String(i.name) === String(req.query.name)) || 'Could not find city name.';
  }

  res.status(200).send(data);
});

app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

http.listen(port, () => console.log('App listening on port', port));
