// medical endpoint
const medical = require('../models/medical.js');


var getAllMedical = (db, req, res) => {
    res.send(medical.getAll(db))
}

module.exports.getAllMedical = getAllMedical;