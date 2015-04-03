var db = require('../../db')

module.exports = function createWorkout(request, response, next){
	var data = JSON.parse(request.body);
	// callback is not necessary as schema validation is handled prior to this function being called.
	db.query("INSERT INTO workout(user_id, day) Values(?,?)", [parseInt(data['user_id']), parseInt(data['day'])]);
	
	/*
	//debugging data 
	console.log(data);
	console.log(data['user_id']);
	console.log(data['day']);
	*/

	next();
};
