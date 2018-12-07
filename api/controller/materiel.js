const materiel = require("../models/materiel.js");
const send = require("../base_send.js");

var getAllMateriel = (db, req, res) => {
    materiel.getAll(db, data => send.send(data, res));
}

var getMaterielByID = function (db, req, res) {
    var id = req.body.id;
    materiel.getByID(db, id, data => send.send(data, res));

}

var addMateriel = function (db, req, res) {
    materiel.addMateriel(db, req.body.name, req.body.state, req.body.battery,
        data => send.send(data, res));
}

module.exports.getAllMateriel = getAllMateriel;
module.exports.getMaterielByID = getMaterielByID;
module.exports.addMateriel = addMateriel;