var uuid4 = require("uuid4");

function addNotification(con, name, level, title, message) {
    var uuid = uuid4()
    con.query("INSERT INTO Notification (UID, name, level, title, message) VALUES ($(uuid), $(name), $(level), $(title), $(message))", function (err, result, fields) {
        if (err) throw err;
        return result;
      });
}

function getNotificationByID(con, id) {
    con.query("SELECT * FROM Notification WHERE ID=?", [id], function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        return result;
      });
}

function getAllNotification(con) {
    con.query("SELECT * FROM Notification", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        return result;
      });
}
