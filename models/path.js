const getAll = (con, callback) => {
    con.query("SELECT * FROM Path",  (err, result, fields) =>{
        if (err) throw err;
        callback(result);
    });
}

const getById = (con, id, callback) => {
    con.query("SELECT * FROM Path WHERE ID = ?", [id], function (err, result, fields) {
        if (err) throw err;
        callback(result);
    });
}

const add = (con, idPosition, callback) => {
    con.query(  "INSERT INTO Path (UID, idPosition) VALUES (?, ?)",[uuid(), idPosition],  (err, result, fields)=> {
                
        if (err) throw err;
        callback(result);
    });
}


module.exports = {
    getAll: getAll,
    getById: getById,
    add: add
}