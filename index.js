const express = require('express');
const bodyParser = require('body-parser');
const medical = require('./controller/medical_req.js');
const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "hackfromgarage2"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("connected to database");
});

module.exports.database = con;

app.post('/medical', (req, res) => {
    medical.getAllMedical(con, req, res);
})

app.listen(8080);