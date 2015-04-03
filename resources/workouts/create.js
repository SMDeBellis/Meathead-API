var db = require('../../db')

module.exports = function createWorkout(request, response, next){
	var data = JSON.parse(request.body);
	db.query("INSERT INTO workout(user_id, day) Values(?,?)", [parseInt(data['user_id']), parseInt(data['day'])]);
	console.log(data);
	console.log(data['user_id']);
	console.log(data['day']);
	response.send({ code: '200 OK' })
	next();
};
