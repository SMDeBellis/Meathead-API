var db = require('../../db');



/*************************************
TODO: Needs to be tested
***************************************/
//PUT
//gets a list of json object in the form of:
/* { workout_id: num, exercises: [{ },{ },{ }]}*/
module.exports = function createExercise(request, response, next){
	var data = request.body;
	var workout_id  = data['workout_id'];
	var exercises = data['exercises'];
	
	/*db.query("INSERT INTO exercises(name, exercise_id, set_num, weight, completed_workout_id)" + 
		 "values(?,?,?,?,?)", ) */


};
