// medical endpoint
const medical = require('../models/medical.js');


var getAllMedical = (db, req, res) => {
    res.send(medical.getAll(db));
}

var getMedicalByID = function(db, req, res) {
    var id = req.body.id;
    console.log(id)
    var result = medical.getByID(db, id);
    res.send(result);
    
}

var addMedical = function(db, req, res) {
    console.log(req.body.weight);
    var result = medical.addMedical(db, req.body.weight, req.body.timestamp, req.body.heartbeat, req.body.glycemia);
    res.send(result);
}

module.exports.getAllMedical = getAllMedical;
module.exports.getMedicalByID = getMedicalByID;
module.exports.addMedical = addMedical;
