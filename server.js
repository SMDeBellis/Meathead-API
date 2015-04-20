/**
	Server for The Meathead API 
**/
var restify = require('restify');

var options = {
	name: 'Meathead API'	
};

// initialize the server
var server = restify.createServer(options);

//parse incoming json data
server.use(restify.bodyParser({
	maxBodySize: 10 * 1024
}));

module.exports = server;

require('./routes');
