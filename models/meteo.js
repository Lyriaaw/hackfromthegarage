var uuid4 = require('uuid4');

function getAll(con) {
    con.query("SELECT * FROM Meteo", function (err, result, fields) {
        if (err) throw err;
        return result;
      });
}

module.exports.getAll = getAll;