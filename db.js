/**
	This is the database connection for the API
	Needs to deal with pooling requests
**/
var mysql = require('mysql');

var db = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'meatheadadmin',
	database: 'meathead_production'
	});

var testDB = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'meatheadadmin',
	database: 'meathead_test'
	});

//switch this variable to false for production mode
var devmode = false;

if(process.env.NODE_ENV == 'production'){
	module.exports = db;
}
else{
	module.exports = testDB;
}
