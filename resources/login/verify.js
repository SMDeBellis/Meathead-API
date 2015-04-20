var db = require('../../db');
var uuidGen = require('node-uuid');

module.exports = function verify(request, response){
	var data = JSON.parse(request.body);
	console.log(data['user_name']);
	console.log(data['pass_hash']);
	db.query("select user_id as user_id from users where user_name = ? and password = ?", 
		[data['user_name'], data['pass_hash']], function(err, rows){
		
		if(rows.length == 0){
			response.send({code: '406 NONEXISTANT'});
		}
		else{
			response.send({code: '200 OK', user_id: rows[0]['user_id']});
		}	
	});
};
