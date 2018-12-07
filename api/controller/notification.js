const notification = require('../models/notification.js');
const send = require("../base_send.js");

var getAllNotification = (db, req, res) => {
    notification.getAll(db, data => send.send(data, res));
}

var getNotificationByID = function (db, req, res) {
    var id = req.body.id;
    notification.getNotificationByID(db, id, data => send.send(data, res));

}

var addNotification = function (db, req, res) {
    notification.addNotification(db, req.body.name, req.body.level, req.body.title, req.body.message,
        data => send.send(data, res));
}

module.exports.getAllNotification = getAllNotification;
module.exports.getNotificationByID = getNotificationByID;
module.exports.addNotification = addNotification;