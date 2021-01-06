const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const fs = require('fs');


app.use(express.static('public'));

app.get('', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html');
  // console.log('oh crap it worked');
})

app.get('/comboPost', (req, res) => {
  var dir = path.join(__dirname, '/public/images/characters')
  var files = fs.readdirSync(dir)
  console.log(files);
  res.sendFile(__dirname + '/public/views/index.html');
  // console.log('oh crap it worked');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})