var db = require('../../db')

/**
*Function first loads the workout table with the user id, workout id, and workout name.
*	It then populates the relation table between workout and exercise list.
*
* JSON structure:
*	{ "user_id" : "uuid", 
*	  "workout_id" : "uuid", 
*	  "workout_name" : "string", 
*	  "exercises" : ["1", "2", ..., "n"] }
*
* Codes:
*	201 PRIMARY KEY ERROR - returned when a collision occurs with the workout_id
*	201 EXERCISE LOAD ERROR - when the query errors for loading the relation table
*	200 OK - when both tables are loaded sucessfully
**/

module.exports = function createWorkout(request, response, next){
	var data = JSON.parse(request.body);
	// callback is not necessary as schema validation is handled prior to this function being called.
	db.query("INSERT INTO workout(user_id, workout_id, workout_name) Values(?,?,?)", [data['user_id'],
											data['workout_id'],
											data['workout_name']], function(err){
		var is_error = false;
		if(err){
			console.log('mysql error');
			response.send({ 'code' : '201 PRIMARY KEY ERROR' });
		}
		else{
			var exercises = data['exercises'];
			for(var i in exercises){
				db.query("INSERT INTO workout_exercise_list_rel(workout_id, exercise_list_id) VALUES(?,?)", [data['workout_id'], exercises[i]], function(err){
					if(err)
						is_error = true;
				});
			}
			if(is_error){
				response.send({ 'code' : '201 EXERCISE LOAD ERROR' });
			}
			else{
				response.send({ 'code' : '200 OK' });
			}	
		}
		console.log('outside of for loop');
		next();

	});
};

