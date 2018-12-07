const uuid = require('uuid4');

const getAll = (con, callback) => {
    con.query("SELECT * FROM Meteo", (err, result, fields) => {
        if (err) callback(err);
        callback(result);
    });
}
const getById = (con, id, callback) => {
    con.query("SELECT * FROM Meteo WHERE ID = ?", [id], (err, result, fields) => {
        if (err) callback(err);
        callback(result);
    })
}

const add = (con, wind_speed, hygrometry, temperature, wind_orientation, callback) => {
    con.query("INSERT INTO Meteo (UID, wind_speed, hygrometry, temperature, wind_orientation) VALUES (?,?, ?, ?, ?);", [uuid(),wind_speed, hygrometry, temperature, wind_orientation], (err, result, fields) => {
        if (err) callback(err);
        callback(result);
    })
}


module.exports = {
    getAll: getAll,
    getById: getById,
    add: add
};