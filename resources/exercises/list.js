var db = require('../../db');

module.exports = function listExercises(request, response){
	var id = request.params.id;

	db.query("select exercise_name, num_sets, weight, exercise_id from exercise where workout_id = ?", id, function(err, rows){
		if(err || rows.length == 0){
			response.send("Invalid Workout Id");
		}
		else{
			console.log("rows sent = ", rows);
			response.send(rows);
		}			
	});
};
