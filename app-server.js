var express = require('express');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var connections = [];
var title = 'Untitled Presentation';

var server = app.listen(3000);

//import
var io = require('socket.io').listen(server);

//connection event occured when socket get connected 
io.sockets.on('connection', function (socket) {

    socket.once('disconnect', function () {
        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
        console.log("Disconnected %s sockets remaining", connections.length);
    });

    socket.emit('welcome', {
        title: title
    });

    connections.push(socket);
    console.log("Connected: %s sockets connected", connections.length);

});




console.log("Server running on localhost 3000")