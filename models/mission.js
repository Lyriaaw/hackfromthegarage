var uuid4 = require('uuid4');

function addMission(con, name, timestamp, description, callback) {
    var uuid = uuid4()
    con.query("INSERT INTO Mission (UID, name, timestamp, description) VALUES (?, ?, ?, ?)", [uuid, name, timestamp, description], function (err, result) {
        if (err) {
            console.log(err);
            callback(err);
        }
        callback(result);
      });
}

function getByID(con, id, callback) {
    con.query("SELECT * FROM Mission WHERE ID=?", [id], function (err, result, fields) {
        if (err) {
            console.log(err)
            callback(err);
        }
        callback(result);
      });
}

function getAll(con, callback) {
    con.query("SELECT * FROM Mission", function (err, result, fields) {
        if (err) {
            console.log(err);
            callback(err);
        }
        callback(result);
      });
}

module.exports.getAll = getAll;
module.exports.getByID = getByID;
module.exports.addMission = addMission;
