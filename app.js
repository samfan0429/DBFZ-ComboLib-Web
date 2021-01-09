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

app.get('/write-combo', (req, res) => {
  var data = require(__dirname + '/charaInfo.json');
  // fs.readdir(dir, function (err, files) {
  //   //handling error
  //   if (err) {
  //       return console.log('Unable to scan directory: ' + err);
  //   } 
  //     //listing all files using forEach
  //   files.forEach(function (file) {
  //       // Do whatever you want to do with the file
  //       console.log(file); 
  //   });
  // });
  // res.sendFile(__dirname + '/public/views/comboPost.html');
  res.json(data);
  console.log(data);
  // console.log('oh crap it worked');
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})