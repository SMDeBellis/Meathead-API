var db = require('../../db');

module.exports = function listWorkouts(request, response, next){
	//console.log('listWorkouts called');
	/**
	*TODO: Need To test with values in database
	**/
	// get value passed in url	
	var user_name = request.params.user;

	// get the user id from the database
	db.query('SELECT id FROM users WHERE user_name = ?', user_name, function(err,rows, fields){
		if(err || rows.length == 0){
			response.send({code: '101', message: 'invalid user name please log in as a valid user'});
			//console.log('in if statement');
		}
		else {
			console.log('rows[0] = ', rows[0]);
			var workouts = {};
			// get workout data corresponding to the user id
			db.query('SELECT id, day, workout_date FROM workout WHERE user_id = ?', rows[0]['id'], function(err, rows, fields){
				//console.log('err: ', err);
				//console.log('rows: ', rows);
                                for (var row in rows){
					var workout = {};
					workout['day'] = row['day'];
					workout['workout_date'] = row['workout_date'];
					// get the exercise data coresponding to each workout
					db.query('SELECT exercise_name, sets, weight FROM exercise WHERE workout_id = ?', row['id'], function(err, rows, fields){
						workout['exercises'] = rows;					
					});
					//add each workout to the set of workouts for the user
					workouts.push(workout);
				}
			});			 	
			response.send(workouts);
		}
	});
	//console.log("user_id = ", user_name);
	next();
};
