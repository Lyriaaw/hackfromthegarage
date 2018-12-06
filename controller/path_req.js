const path = require('../models/path.js');



const getAllPath = (con, req, res)=>{
    path.getAll(con, data => res.send(JSON.stringify(data)));
}

const add = (con, req, res)=> {
    console.log(req.body);
    path.add(con, req.body.id, data =>
         res.send(JSON.stringify(data)));
}

const getByIdPath = (con, req, res) => {
    let data = path.getById(con, req.id);
    res.send(data);
}


module.exports = {
    getAllPath : getAllPath,
    addPath : add,
    getByIdPath : getByIdPath
}