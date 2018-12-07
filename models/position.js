const uuid = require('uuid4');

const getAll = (con, callback) => {
    con.query("SELECT * FROM Position", function (err, result, fields) {
        if (err) throw err;
        callback(result);
    });
}
const getById = (con, id, callback) => {
    con.query("SELECT * FROM Position WHERE ID = ?", [id], function (err, result, fields) {
        if (err) throw err;
        callback(result);
    });
}
const add = (con, longitude, latitude, callback) => {
    con.query("INSERT INTO Position (longitude, latitude) VALUES (?, ?)", [longitude, latitude], (err, result, fields) => {
        if (err) throw err;
        callback(result);
    });
}

module.exports = {
    getAll: getAll,
    getById: getById,
    add: add
}