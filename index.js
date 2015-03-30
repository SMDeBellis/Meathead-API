/**
	Main access point for the API
**/
var server = require('./server');

var port = 8080;

server.listen(port, function(request, response){
	console.log("listening on port %i", server.address());
}); 
