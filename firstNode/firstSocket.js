var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var prompt = require('prompt-sync') ();



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', function (socket) {
    socket.on('chat message', function (name, msg) {
        io.emit('chat message', name, msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
