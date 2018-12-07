const message = require("../models/message.js");
const send = require("../base_send.js");

var getAllMessage = (db, req, res) => {
    message.getAll(db, data => send.send(data, res));
}

var getMessageByID = function (db, req, res) {
    var id = req.body.id;
    message.getByID(db, id, data => send.send(data, res));

}

var addMessage = function (db, req, res) {
    message.addMessage(db, req.body.text, req.body.timestamp, req.body.image, req.body.sender, 
        data => send.send(data, res));
}

module.exports.getAllMessage = getAllMessage;
module.exports.getMessageByID = getMessageByID;
module.exports.addMessage = addMessage;