// medical endpoint


const medical_add = (bdd, req, res) => {
    console.log(req.body);
    let success = true;
    if (success) {
        res.send('{"statut":true}');
    } else {
        res.send('{"statut":false}')
    }
}

module.exports = {
    medical_add: medical_add
}