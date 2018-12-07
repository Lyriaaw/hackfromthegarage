const uuid = require('uuid4');

const getAll = (con, callback) => {
    con.query("SELECT * FROM Path", (err, result, fields) => {
        if (err) callback("err");;
        callback(result);
    });
}

const getById = (con, id, callback) => {
    con.query("SELECT * FROM Path WHERE ID = ?", [id], function (err, result, fields) {
        if (err) callback("err");
        callback(result);
    });
}

const add = (con, idPosition, idMission, callback) => {
    con.query("INSERT INTO Path (UID, id_position, id_misson) VALUES (?, ?, ?)", [uuid(), idPosition, idMission], (err, result, fields) => {
        if (err) {
            console.log(err);
            callback("err");
        }
        callback(result);
    });
}


module.exports = {
    getAll: getAll,
    getById: getById,
    add: add
}