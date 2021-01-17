const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const fs = require('fs');


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html');
  // console.log('oh crap it worked');
})

app.get('/characters', (req, res) => {
  var data = require(__dirname + '/charaInfo.json');
  res.json(data);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})