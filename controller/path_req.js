const path = require('../models/path.js');



const getAllPath = (con, req, res)=>{
    let data = path.getAll(con);
    res.send(data);
}

const add = (conn, req, res)=> {
    let data = path.add(con, req.id);
    res.send(data);
}

const getByIdPath = (con, req, res) => {
    let data = path.getById(con, req.id);
    res.send(data);
}


module.exports = {
    getAllPath = getAllPath,
    add = addPath,
    getByIdPath = getAllPath
}