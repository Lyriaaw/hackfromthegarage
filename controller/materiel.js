var materiel = require("../models/materiel.js");

var getAllMateriel = (db, req, res) => {
    res.send(materiel.getAll(db));
}

var getMaterielByID = function(db, req, res) {
    var id = req.body.id;
    console.log(id)
    var result = materiel.getByID(db, id);
    res.send(result);
    
}

var addMateriel = function(db, req, res) {
    var result = materiel.addMateriel(db, req.body.name, req.body.state, req.body.battery);
    res.send(result);
}

module.exports.getAllMateriel = getAllMateriel;
module.exports.getMaterielByID = getMaterielByID;
module.exports.addMateriel = addMateriel;
