var db = require('../../db');

/**
* This endpoint takes a workout id and deletes all of the related exercises
* in the relation table and then removes the workout from the workout table
*
* JSON: Incoming: { 'workout_id' : uuid }
*
* Return codes:	301 DELETION ERROR
*		200 OK 
*
**/

module.exports = function delWorkouts(request, response, next){
	var data = JSON.parse(request.body);
	var workout_id = data['workout_id'];
	db.query("DELETE FROM workout_exercise_list_rel WHERE workout_id = ?", workout_id);
	db.query("DELETE FROM workout WHERE workout_id = ?", workout_id, function(err){
		if(err){
			console.log(err);
			response.send({'code' : '301 DELETION ERROR' });
		}
		else{
			response.send({'code' : '200 OK' });
		}
	});
	next();
};
