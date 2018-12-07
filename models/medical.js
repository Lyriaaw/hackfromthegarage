var uuid4 = require('uuid4');
var send = require('../base_send.js');
function addMedical(con, poids, timestamp, heartbeat, glycemia, callback) {
    var uuid = uuid4()
    con.query("INSERT INTO Health (UID, mass, timestamp, pulse, glycemia) VALUES (?, ?, ?, ?, ?)", [uuid, poids, timestamp, heartbeat, glycemia], function (err, result) {
        if (err) throw err;
        console.log(result);
        callback(result);
      });
}

function getByID(con, id, callback) {
    con.query("SELECT * FROM Health WHERE ID=?", [id], function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        callback(result);
      });
}

function getAll(con, callback) {
    con.query("SELECT * FROM Health", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        callback(result);
      });
}

module.exports.getAll = getAll;
module.exports.getByID = getByID;
module.exports.addMedical = addMedical;
