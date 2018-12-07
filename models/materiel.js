var uuid4 = require('uuid4');

function addMateriel(con, name, state, battery, callback) {
    var uuid = uuid4()
    con.query("INSERT INTO Material (UID, name, state, battery) VALUES (?, ?, ?, ?)", [uuid, name, state, battery], function (err, result) {
        if (err) {
            console.log(err);
            callback("");
        }
        callback(result);
      });
}

function getByID(con, id, callback) {
    con.query("SELECT * FROM Material WHERE ID=?", [id], function (err, result, fields) {
        if (err) callback("");
        callback(result);
      });
}

function getAll(con, callback) {
    con.query("SELECT * FROM Material", function (err, result, fields) {
        if (err) {
            console.log(err);
            callback("");
        }
        callback(result);
      });
}

module.exports.getAll = getAll;
module.exports.getByID = getByID;
module.exports.addMateriel = addMateriel;
