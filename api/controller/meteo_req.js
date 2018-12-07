// medical endpoint
const meteo = require('../models/meteo.js');
const send = require('../base_send.js');

const getAllMeteo = (db, req, res) => {
    medical.getAll(db, data => send(data, res));
}

const getById = (db, req, res) => {
    meteo.getById(db, req.body.id, data => send.send(data, res));
}

const add = (db, req, res) => {
    meteo.add(db, req.body.wind_speed, req.body.hygrometry, req.body.temperature, req.body.wind_orientation,
        data => send.send(data, res));
}

module.exports = {
    getAllMeteo: getAllMeteo,
    getByidMeteo: getById,
    addMeteo: add
}