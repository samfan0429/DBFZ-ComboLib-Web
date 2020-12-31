const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));

app.get('', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html');
  // console.log('oh crap it worked');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})