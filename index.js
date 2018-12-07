const express = require('express');
const bodyParser = require('body-parser');
const medical = require('./controller/medical_req.js');
const path = require('./controller/path_req.js');
const position = require('./controller/position_req.js');
const notification = require('./controller/notification_req.js');
const message = require('./controller/message.js');

const materiel = require('./controller/materiel.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "toor",
    database: "hackfromgarage2"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected to database");
});

module.exports.database = con;

app.post('/medical/getall', (req, res) => {
    medical.getAllMedical(con, req, res);
})

app.post('/medical/getbyid', (req, res) => {
    medical.getMedicalByID(con, req, res);
})

app.post('/medical/add', (req, res) => {
    medical.addMedical(con, req, res)
})

app.get('/notification/getall', (req, res) => {
    notification.getAllNotification(con, req, res)
})

app.post('/notification/getbyid', (req, res) => {
    notification.getNotificationByID(con, req, res)
})

app.post('/notification/add', (req, res) => {
    notification.addNotification(con, req, res)
})

app.get('/materiel/getall', (req, res) => {
    materiel.getAllMateriel(con, req, res)
}) 

app.post('/materiel/getbyid', (req, res) => {
    materiel.getMaterielByID(con, req, res)
})

app.post('/materiel/add', (req, res) => {
    materiel.addMateriel(con, req, res)
})

app.get('/message/getall', (req, res) => {
    message.getAllMessage(con, req, res)
}) 

app.post('/message/getbyid', (req, res) => {
    message.getMessageByID(con, req, res)
})

app.post('/message/add', (req, res) => {
    message.addMessage(con, req, res)
})

app.post('/path/add', (req, res) => {
    path.addPath(con, req, res);
})

app.get('/path/getall', (req, res) => {
    path.getAllPath(con, req, res);
})

app.post('/path/getbyid', (req, res) => {
    path.getByIdPath(con, req, res);
})

app.get('/position/getall', (req, res) => {
    position.getAllPosition(con, req, res);
})
app.post('/position/getbyid', (req, res) => {
    position.getPositionById(con, req, res);
})
app.post('/position/add', (req, res)=>{
    position.addPosition(con, req, res);
})

app.listen(8080);