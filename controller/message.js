var message = require("../models/message.js");

var getAllMessage = (db, req, res) => {
    res.send(message.getAll(db));
}

var getMessageByID = function(db, req, res) {
    var id = req.body.id;
    console.log(id)
    var result = message.getByID(db, id);
    res.send(result);
    
}

var addMessage = function(db, req, res) {
    var result = message.addMessage(db, req.body.text, req.body.timestamp, req.body.image, req.body.sender);
    res.send(result);
}

module.exports.getAllMessage = getAllMessage;
module.exports.getMessageByID = getMessageByID;
module.exports.addMessage = addMessage;
