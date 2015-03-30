/**
	Server for The Meathead API 
**/
var restify = require('restify');

var options = {
	name: 'Meathead API'	
};

var server = restify.createServer(options);

module.exports = server;

require('./routes');
