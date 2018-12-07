const notification = require('../models/notification.js');


var getAllNotification = (db, req, res) => {
    res.send(notification.getAll(db));
}

var getNotificationByID = function(db, req, res) {
    var id = req.body.id;
    console.log(id)
    var result = notification.getNotificationByID(db, id);
    res.send(result);
    
}

var addNotification = function(db, req, res) {
    var result = notification.addNotification(db, req.body.name, req.body.level, req.body.title, req.body.message);
    res.send(result);
}

module.exports.getAllNotification = getAllNotification;
module.exports.getNotificationByID = getNotificationByID;
module.exports.addNotification = addNotification;
