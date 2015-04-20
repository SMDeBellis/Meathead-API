var db = require('../../db');
var uuidGen = require('node-uuid');

module.exports = function register(request, response){
	var data = JSON.parse(request.body);
	// checking error is not necessary as validator checks schema prior to calling this function
	db.query("select user_name, email from users where user_name = ? or email = ?", [data['user_name'], data['email']], function(err, rows){
		if(rows.length == 0){
			var uuid = uuidGen.v4();
			db.query("insert into users (user_name, email, password, user_id) values(?,?,?,?)", [data['user_name'], data['email'], data['pass_hash'], uuid]);
			response.send({code: '200 OK', user_id: uuid});
		}
		else{
			for(var i in rows){
				if(rows[i]['user_name'] == data['user_name']){
					response.send({code: '201 USER'});
					break;
				}
				else if(rows[i]['email'] == data['email']){
					response.send({code: '201 EMAIL'});
					break;
				}
			}
		}			
	});
};
