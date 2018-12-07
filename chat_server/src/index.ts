var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('New user');

  socket.on('message', function(message) {
    console.log('message', message);
    io.emit('message', message);
  });
  socket.on('disconnect', function() {
    console.log('User disconected');
  });



});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
