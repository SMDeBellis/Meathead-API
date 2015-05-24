var db = require('../../db');

/**
* Function gets a list of all workouts belonging to the user_id
*	and returns them in a json object
* JSON:
*	Incoming: { 'user_id' : uuid }
*	Outgoing: { 'code' : return code [, 'workouts' : [ { workout_id1: uuid, workout_name: string }, ... ] ]
* 
* Return codes:
*	201 USER ID ERROR - when the query errors
*	200 OK - when no query errors
*/

module.exports = function listWorkouts(request, response, next){
	//console.log('listWorkouts called');
	var data = JSON.parse(request.body);
	var id = data['user_id'];
	console.log('id: ' + id);
	var workouts = [];
	// get workout data corresponding to the user id
	db.query('SELECT workout_id, workout_name FROM workout WHERE user_id = ?', id, function(err, rows, fields){
		if(err){
			console.log(err)
			response.send({'code' : '201 USER ID ERROR'});
		}
		else{
                	for (var row in rows){
				var workout = {};
				workout['workout_id'] = rows[row]['workout_id'];
				workout['workout_name'] = rows[row]['workout_name'];
				workouts.push(workout);
			}
			console.log(workouts);
			response.send({ 'code' : '200 OK', 'workouts' : workouts});
		}
	});
	next();
};
