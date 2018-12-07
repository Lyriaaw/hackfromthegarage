var uuid4 = require("uuid4");

function addNotification(con, name, level, title, message, callback) {
    var uuid = uuid4()
    con.query("INSERT INTO Notification (UID, name, level, title, message) VALUES (?, ?, ?, ?, ?)", [uuid, name, level, title, message], function (err, result, fields) {
        if (err) callback("");
        callback(result);
    });
}

function getNotificationByID(con, id, callback) {
    con.query("SELECT * FROM Notification WHERE ID=?", [id], function (err, result, fields) {
        if (err) callback("");
        callback(result);
    });
}

function getAll(con, callback) {
    con.query("SELECT * FROM Notification", function (err, result, fields) {
        if (err) callback("");
        callback(result);
    });
}

module.exports.addNotification = addNotification;
module.exports.getNotificationByID = getNotificationByID;
module.exports.getAll = getAll;