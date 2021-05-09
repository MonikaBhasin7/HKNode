var http = require('http');
var events = require('events');

var eventEmitter = new events.EventEmitter();
eventEmitter.on('someone requested',function(req, res){
    console.log("I have listend...")
}); //EventListner

var server = http.createServer(function(req, res){
    eventEmitter.emit('seomeone requested');  //Event emit/ Event trigger
    res.end("Server works here...")
});


server.listen(3000, 'localhost', function() {
    console.log('Server started on port : 3000')
});