var db = require('../../db');

module.exports = function listWorkouts(request, response, next){
	//console.log('listWorkouts called');
	/**
	*TODO: Need To switch over to uuid
	**/
	var id = request.params.id;
	
	var workouts = []
	// get workout data corresponding to the user id
	db.query('SELECT id, day, workout_date FROM workout WHERE user_id = ?', id, function(err, rows, fields){
                for (var row in rows){
			var workout = {};
			workout['day'] = rows[row]['day'];
			workout['workout_date'] = rows[row]['workout_date'];
			
			// get the exercise data coresponding to each workout
			db.query('SELECT exercise_name, sets, weight FROM exercise WHERE workout_id = ?', rows[row]['id'], function(err, rows, fields){
				workout['exercises'] = rows;					
			});
			//add each workout to the list of workouts for the user
			workouts.push(workout);
		}
		response.send({workouts: workouts});
	});
	next();
};
