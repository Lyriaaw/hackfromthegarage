var uuid4 = require('uuid4');

function addMessage(con, text, timestamp, image, sender) {
    var uuid = uuid4()
    con.query("INSERT INTO Message (UID, texte, timestamp, image, sender) VALUES (?, ?, ?, ?, ?)", [uuid, text, timestamp, image, sender], function (err, result) {
        if (err) throw err;
        console.log(result);
        return result;
      });
}

function getByID(con, id) {
    con.query("SELECT * FROM Message WHERE ID=?", [id], function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        return result;
      });
}

function getAll(con) {
    con.query("SELECT * FROM Message", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        return result;
      });
}

module.exports.getAll = getAll;
module.exports.getByID = getByID;
module.exports.addMessage = addMessage;
