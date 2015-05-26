var joi = require('joi');

module.exports = joi.object({
	exercise_name: joi.string().required(),
	completed_workout_id: joi.number().integer().required(),
	set_num: joi.number().integer().required(),
	weight: joi.number().integer(),
	exercise_id: joi.number().integer().required()
});
