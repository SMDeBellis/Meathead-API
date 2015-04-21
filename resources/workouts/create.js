var db = require('../../db')

module.exports = function createWorkout(request, response, next){
	var data = JSON.parse(request.body);
	// callback is not necessary as schema validation is handled prior to this function being called.
	db.query("INSERT INTO workout(user_id, workout_id, workout_name) Values(?,?,?)", [data['user_id'],
											data['workout_id'],
											data['workout_name']]);
	var exercises = data['exercises'];
	for(var i in exercises){
		db.query("INSERT INTO workout_exercise_list_rel(workout_id, exercise_list_id) VALUES(?,?)", [data['workout_id'], exercises[i]]);
	
	}
	console.log('outside of for loop');
	
	
	/*
	//debugging data 
	console.log(data);
	console.log(data['user_id']);
	console.log(data['day']);
	*/
	response.send({ 'code' : '200 OK' });
	next();
};
