var express = require('express');
var _ = require('underscore');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));


var connections = [];
var title = 'Untitled Presentation';

var audience =[];
var server = app.listen(3000);

//import
var io = require('socket.io').listen(server);

//connection event occured when socket get connected 
io.sockets.on('connection', function (socket) {

    socket.once('disconnect', function () {
        //remove the disconnected user form audience array if it is audience

        var member = _.findWhere(audience, {id: this.id});

        if(member) {
            audience.splice(audience.indexOf(member),1);
            io.sockets.emit('audience', audience)
            console.log(member.name + " Member left " + audience.length + " Members remain");
        }

        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
        console.log("Disconnected %s sockets remaining", connections.length);
    });

    socket.on('join' , function (payload) {
        var newMember = {
            id : this.id,
            name : payload.name
        };
        //letting user know that he joined
        this.emit('joined', newMember);
        audience.push(newMember);

        //Broadcasting member joined to every one
        io.sockets.emit('audience', audience);

        console.log("Joined: " + payload.name)

    });
    socket.emit('welcome', {
        title: title
    });

    connections.push(socket);
    console.log("Connected: %s sockets connected", connections.length);

});




console.log("Server running on localhost 3000")