var express = require('express');
var _ = require('underscore');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));


var connections = [];
var title = 'Presentation yet to start';
var audience =[];
var speaker = {};//only one speaker so object in place pf array
var questions = require('./app-questions');
var slides = require('./app-slides');
var currentQuestion = false;
var currentSlide = false;
var results = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
};


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
        } else if (this.id === speaker.id) { // Handling leaving a speaker
            console.log(speaker.name + "Speaker left");
            speaker = {};
            title = 'Presentation yet to start';
            io.sockets.emit('end', {title : title, speaker: ''});

        }

        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
        console.log("Disconnected %s sockets remaining", connections.length);
    });

    socket.on('join' , function (payload) {
        var newMember = {
            id : this.id,
            name : payload.name,
            type: 'audience'
        };
        //letting user know that he joined
        this.emit('joined', newMember);
        audience.push(newMember);

        //Broadcasting member joined to every one
        io.sockets.emit('audience', audience);

        console.log("Joined: " + payload.name)

    });

    socket.on('start', function (payload) {

        speaker.name = payload.name;
        speaker.id = this.id;
        speaker.type = 'speaker';

        title = payload.title;
        this.emit('joined', speaker);

        io.sockets.emit('start',{title: title, speaker: speaker.name});
        console.log("Presentation started: %s by %s", title, speaker.name);


    });

    socket.on('ask', function (question) {
        currentQuestion = question;
        results = {a:0, b:0, c:0 ,d:0}
        io.sockets.emit('ask', currentQuestion);
        console.log("question Ask" + question.q);
    });

    socket.on('display', function (slide) {
        currentSlide = slide;
        io.sockets.emit('display', currentSlide);
        console.log("Slide Displayed" + slide.t);
    });

    socket.on('answer', function (payload) {
        results[payload.choice]++;
        io.sockets.emit('results', results);
        console.log("Answer : %s  - %j", payload.choice, results)
    });

    socket.emit('welcome', {
        title: title,
        audience : audience,
        speaker :speaker.name,
        questions: questions,
        slides: slides,
        currentQuestion: currentQuestion,
        currentSlide : currentSlide,
        results: results
    });

    connections.push(socket);
    console.log("Connected: %s sockets connected", connections.length);

});




console.log("Server running on localhost 3000")