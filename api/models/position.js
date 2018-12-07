const uuid = require('uuid4');

const getAll = (con, callback) => {
    con.query("SELECT * FROM Position;", function (err, result, fields) {
        if (err) callback(err);
        callback(result);
    });
}
const getById = (con, id, callback) => {
    con.query("SELECT * FROM Position WHERE ID = ?;", [id], function (err, result, fields) {
        if (err) callback(err);
        callback(result);
    });
}
const add = (con, longitude, latitude, callback) => {
    console.log(longitude);
    console.log(latitude);
    con.query('INSERT INTO Position (UID, longitude, latitude) VALUES (?, 1, 1);',[uuid()], (err, result, fields) => {
        if (err) {
            console.log(err);
            callback(err);
        }
        callback(result);
    });
}

module.exports = {
    getAll: getAll,
    getById: getById,
    add: add
}