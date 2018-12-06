var uuid4 = require('uuid4');

function addMedical(con, poids, timestamp, heartbeat, glycemia) {
    var uuid = uuid4()
    con.query("INSERT INTO Health (UID, mass, timestamp, pulse, glycemia) VALUES (?, ?, ?, ?, ?)", [uuid, poids, timestamp, heartbeat, glycemia], function (err, result) {
        if (err) throw err;
        console.log(result);
        return result;
      });
}

function getByID(con, id) {
    con.query("SELECT * FROM Health WHERE ID=?", [id], function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        return result;
      });
}

function getAll(con) {
    con.query("SELECT * FROM Health", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        return result;
      });
}

module.exports.getAll = getAll;
module.exports.getByID = getByID;
module.exports.addMedical = addMedical;
