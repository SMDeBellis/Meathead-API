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

	for(var i in exercises){
		var attrs = exercises[i];
		db.query("insert into exercise (exercise_name, workout_id, num_sets, weight, exercise_id)" +
			"values(?,?,?,?,?)", [ attrs['exercise_name'], workout_id, 
					       attrs['num_sets'], attrs['exercise_id'] ], function(err){
			if(err) response.send("error loading exercises");
			else response.send("loading successful");
		});
						
	}
	next();
};
