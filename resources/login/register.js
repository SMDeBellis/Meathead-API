var db = require('../../db');

module.exports = function register(request, response){
	var user_name = request.params.name;
	var email = request.params.email;
	//var password = request.params.password;
	//console.log({user: user_name, email: email, password: password});

	//db.connect();
	//db.query("INSERT INTO users VALUES('" + user_name + "', '" + email + ", '" + password + "')");
	//db.end();
	response.send({ feet: 'footbath', name: user_name, email: email});

};
