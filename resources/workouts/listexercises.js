var db = require('../../db');

/**
* Endpoint to return a list of exercises associated with a given workout.
*
* JSON: 
*	Incoming: { 'user_id' : uuid, 'workout_id' : uuid }
*	Outgoing: { 'code' : return code (, 'mod_flag': boolean, 'exercises' : [ { 'exercise_id' : int, 'exercise_name' : string, 'exercise_type' : string }, ... ] ) }
*
* Return codes:
*	201 USER ID ERROR - no user found, no list returned.
*	203 NO WORKOUT FOUND - no workout under workout_id, no list returned.
*	200 OK - user and workout found, list returned. Could be an empty list.
*/

module.exports = function listExercises(request, response, next){

};
