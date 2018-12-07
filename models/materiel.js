var uuid4 = require('uuid4');

function addMateriel(con, name, state, battery) {
    var uuid = uuid4()
    con.query("INSERT INTO Material (UID, name, state, battery) VALUES (?, ?, ?, ?)", [uuid, name, state, battery], function (err, result) {
        if (err) throw err;
        console.log(result);
        return result;
      });
}

function getByID(con, id) {
    con.query("SELECT * FROM Material WHERE ID=?", [id], function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        return result;
      });
}

function getAll(con) {
    con.query("SELECT * FROM Material", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        return result;
      });
}

module.exports.getAll = getAll;
module.exports.getByID = getByID;
module.exports.addMateriel = addMateriel;
