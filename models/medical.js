var uuid4 = require('uuid4');
var send = require('../base_send.js');

function addMedical(con, weight, timestamp, heartbeat, glycemia, callback) {
  var uuid = uuid4()
  con.query("INSERT INTO Health (UID, mass, timestamp, pulse, glycemia) VALUES (?, ?, ?, ?, ?)", [uuid, weight, timestamp, heartbeat, glycemia], function (err, result) {
    if (err) {
      callback("");
      console.log(err);
    }
    callback(result);
  });
}

function getByID(con, id, callback) {
  con.query("SELECT * FROM Health WHERE ID=?", [id], function (err, result, fields) {
    if (err) callback("");
    callback(result);
  });
}

function getAll(con, callback) {
  con.query("SELECT * FROM Health", function (err, result, fields) {
    if (err) callback("");
    callback(result);
  });
}

module.exports.getAll = getAll;
module.exports.getByID = getByID;
module.exports.addMedical = addMedical;