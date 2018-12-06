

class Medical {
    constructor(db, uid, weight, timestamp, heartbeat, glycemia) {
        this.db = db;
        this.uid = uid;
        this.weight = weight;
        this.timestamp = timestamp;
        this.heartbeat = heartbeat;
        this.glycemia = glycemia;
    }

}

function getAll(con) {
    con.query("SELECT * FROM medical", function (err, result, fields) {
        if (err) throw err;
        return results;
      });
}

module.exports.getAll = getAll;
