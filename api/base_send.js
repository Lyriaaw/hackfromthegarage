const send  = (data, res) => {
    res.send(JSON.stringify(data))
}

module.exports.send = send;