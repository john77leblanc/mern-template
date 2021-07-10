const express = require('express');


const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const path = require('path');


const port = process.env.PORT || 8081;
const publicDirectory = path.join(__dirname, '../public');

app.use(express.static(publicDirectory));
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(publicDirectory, '/index.html'));
});

app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

http.listen(port, () => console.log('App listening on port', port));
