// medical endpoint
const medical = require('../models/medical.js');
const send = require('../base_send.js');

var getAllMedical = (db, req, res) => {
    medical.getAll(db, data => send.send(data, res));
}

var getMedicalByID = function (db, req, res) {
    var id = req.body.id;
    medical.getByID(db, id, data => send.send(data, res));

}

var addMedical = function (db, req, res) {
    medical.addMedical(db, req.body.mass,
        req.body.timestamp, req.body.pulse, req.body.glycemia, data => send.send(data, res));

}

module.exports.getAllMedical = getAllMedical;
module.exports.getMedicalByID = getMedicalByID;
module.exports.addMedical = addMedical;