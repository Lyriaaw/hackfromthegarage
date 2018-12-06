const path = require('../models/path.js');



const getAllPath = (con, req, res) => {
    path.getAll(con, data => res.send(JSON.stringify(data)));
}

const add = (con, req, res) => {
    path.add(con, req.body.id, data => res.send(JSON.stringify(data)));
}

const getByIdPath = (con, req, res) => {
    path.getById(con, req.body.id, data => res.send(JSON.stringify(data)));
}


module.exports = {
    getAllPath: getAllPath,
    addPath: add,
    getByIdPath: getByIdPath
}