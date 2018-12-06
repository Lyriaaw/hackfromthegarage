const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const dbb;


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
// ==> enables support for post requests


const make_medical_request = (data) => {

}


// medical endpoint
app.post('/medical_api', (req, res)=>{
    // ID
    // UID
    // Poids: float (en kilogramme)
    // Timestamp: milliseconde
    // Poux: int
    // Glycémie: int
    console.log(req.body);
    res.send('');
});



app.listen(8080);