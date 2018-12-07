const mission = require("../models/mission.js");
const send = require("../base_send.js");

var getAllMission = (db, req, res) => {
    mission.getAll(db, data => send.send(data, res));
}

var getMissionByID = function (db, req, res) {
    var id = req.body.id;
    mission.getByID(db, id, data => send.send(data, res));

}

var addMission = function (db, req, res) {
    mission.addMission(db, req.body.name, req.body.timestamp, req.body.description, 
        data => send.send(data, res));
}

module.exports.getAllMission = getAllMission;
module.exports.getMissionByID = getMissionByID;
module.exports.addMission = addMission;