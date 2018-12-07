const postion = require('../models/position.js');

const getAllPosition = (con, req, res) => {
    postion.getAll(con, data => res.send(JSON.stringify(data)));
}
const getPositionById = (con, req, res) => {
    postion.getById(con, req.body.id, data => res.send(JSON.stringify(data)));

}
const addPosition = (con, req, res) => {
    postion.add(con, req.body.longitude, req.body.latitude, data => res.send(JSON.stringify(data)));
}

module.exports = {
    getAllPosition: getAllPosition,
    getPositionById: getPositionById,
    addPosition: addPosition
}