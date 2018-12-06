var uuid4 = require('uuid4');

function addMedical(con, poids, timestamp, heartbeat, glycemia) {
    var uuid = uuid4()
    con.query("INSERT INTO Health()", function (err, result, fields) {
        if (err) throw err;
        return results;
      });
}

function getAll(con) {
    con.query("SELECT * FROM Health", function (err, result, fields) {
        if (err) throw err;
        return result;
      });
}

module.exports.getAll = getAll;
