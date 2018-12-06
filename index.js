const express = require('express');
const bodyParser = require('body-parser');
const medical = require('./controller/medical_req.js');
const app = express();

var database = null;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
// ==> enables support for post requests


var orm = require('orm');

orm.connect('mysql://root:toor@localhost/hackfromgarage2', function(err, db) {
  if (err) {
      return console.error('Connection error: ' + err);
  }
  database = db;
  module.exports.database = database;
});
app.post('/medical', (req, res)=>{
    medical.medicalGet();
})

app.listen(8080);