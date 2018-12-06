const getAll = (con) => {
    con.query("SELECT * FROM Path", function (err, result, fields) {
        if (err) throw err;
        return result;
    });
}

const getById = (con, id) => {
    con.query("SELECT * FROM Meteo WHERE ID = " + id, function (err, result, fields) {
        if (err) throw err;
        return result;
    });
}

const add = (con, idPosition, callback) => {
    console.log(callback);
    con.query("INSERT INTO Path (UID, idPosition) VALUES (?, ?)", [1, idPosition], function (err, result, fields) {
        if (err) throw err;
        callback(result);
    });
}


module.exports = {
    getAll : getAll,
    getById : getById,
    add : add
}