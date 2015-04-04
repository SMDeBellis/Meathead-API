var db = require('../../db');

module.exports = function verify(request, response){
	var data = JSON.parse(request.body);
	db.query("select id from users where user_name = ? and password = ?", 
		[data['user_name'], data['pass_hash']], function(err, rows){
		
		if(rows.length == 0){
			response.send({code: '406 Not Acceptable'});
		}
		else{
			var id = rows[0]
			//console.log(id['id']);
			response.send({code: '200 OK', id: id['id']});
		}	
	});
};
