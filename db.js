var mysql = require('mysql');

var db = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'meatheadadmin',
	database: 'meathead_production'
	});

module.exports = db;
