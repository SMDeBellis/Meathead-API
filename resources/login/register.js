var db = require('../../db');

module.exports = function register(request, response){
	var data = JSON.parse(request.body);
	// callback is not necessary as schema validation is handled prior to this function being called.
	db.query("select user_name from users where user_name = ?", data['user_name'], function(err, results){
		if(results.length == 0){
			db.query("insert into users (user_name, email, password) values(?,?,?)", [data['user_name'], data['email'], data['pass_hash']]);
			response.send({code: '200 OK'});
		}
		else{
			response.send({code: '201 DB ERROR'});
		}			
	});
};
