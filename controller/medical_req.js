// medical endpoint
const medical = require('../models/medical.js');


const medicalGet = (bdd, req, res) => {
    console.log(req.body);

    var allMedicals = medical.getAll();
    let success = true;
    if (success) {
        res.send('{"statut":true}');
    } else {
        res.send('{"statut":false}')
    }
}

module.exports = {
    medicalGet: medicalGet
}