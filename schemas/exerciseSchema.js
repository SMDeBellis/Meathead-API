var joi = require('joi');

module.exports = joi.object({
	exercise_name: joi.string().required(),
	workout_id: joi.number().integer().required(),
	num_sets: joi.number().integer().required(),
	weight: joi.number().integer(),
	exercise_id: joi.number().integer().required()
});
