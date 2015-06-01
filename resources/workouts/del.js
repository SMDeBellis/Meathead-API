var db = require('../../db');

/**
* This endpoint takes a workout id and deletes all of the related exercises
* in the relation table and then removes the workout from the workout table
*
* JSON: Incoming: { 'user_id : uuid, 'workout_id' : uuid }
*	Outgoing: { 'code' : string }
*
* Return codes:	201 USER ERROR
*               203 WORKOUT ID ERROR
*		205 WORKOUT DELETION ERROR
*		207 WORKOUT EXERCISE LIST REL ERROR
*		200 OK 
*
**/

module.exports = function delWorkouts(request, response, next){
	console.log('In delWorkouts***********************');
	var data = JSON.parse(request.body);
	console.log('incoming json************************');
	console.log(data);
	var workout_id = data['workout_id'];
        var user_id = data['user_id'];
        db.query("SELECT user_id FROM workout WHERE workout_id = ?", workout_id, function(err, rows, fields){
		if(rows.length != 1){
			response.send({'code' : '203 WORKOUT ID ERROR'});
 		}
		else{
			if(rows[0]['user_id'] != user_id){
				response.send({'code' : '201 USER ERROR'})
			}
			else{
				db.query("DELETE FROM workout_exercise_list_rel WHERE workout_id = ?", workout_id, function(err){
					if(!err){
						console.log("!err works");
						db.query("DELETE FROM workout WHERE workout_id = ?", workout_id, function(err){
							if(!err){
								response.send({'code' : '200 OK',});
							}
							else{
								console.log(err);
								response.send({'code' : '205 WORKOUT DELETION ERROR'});
							}
						});
					}		
					else{
						console.log(err);
						response.send({'code' : '207 WORKOUT EXERCISE LIST REL ERROR'});
					}
				}); 
		
			}
		}
	});
	next();
};
