const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}
app.get('/medical_data', (req, res) => {
    res.send({
        'mass': 70 + Math.random() * getRandomInt(-1, 1) * 3,
        'timestamp': new Date().getMilliseconds(),
        'pulse': 70 + Math.random() * getRandomInt(-1, 1) * 15,
        'glycemia': 70 + Math.random() * getRandomInt(-1, 1) * 15,
    })
})
app.listen(3000);