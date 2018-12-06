const postion = require('../models/position.js');


const getAllPosition = (db, req, res)=>{
    res.send(postion.getAll());
}
const getPositionById = (db, req, res)=>{
    let res = postion.getById(db, req.body.id);
    res.send(res);
}  

module.exports.getAllPosition = getAllPosition;
module.exports.getPositionById = getPositionById;