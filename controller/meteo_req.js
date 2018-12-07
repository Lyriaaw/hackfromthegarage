// medical endpoint
const meteo = require('../models/meteo.js');


var getAllMedical = (db, req, res) => {
    res.send(medical.getAll(db))
}

module.exports.getAllMeteo = getAllMeteo;