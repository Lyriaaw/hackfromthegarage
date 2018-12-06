const uuid = require('uuid4');

const getAll = (con) => {
    con.query("SELECT * FROM Postion", function (err, result, fields) {
        if (err) throw err;
        return result;
    });
}
const getById = (con, id) => {
    con.query("SELECT * FROM Postion WHERE ID = " + id, function (err, result, fields) {
        if (err) throw err;
        return result;
    });
}
const add = (con, longitude, latitude) => {
    con.query("", function (err, result, fields) {
        if (err) throw err;
        return result;
    });
}
module.exports.getAll = getAll;
module.exports.getById = getById;