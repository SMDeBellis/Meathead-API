var joi = require('joi')

module.exports = joi.object().required().keys({
	user_id: joi.string().required(),
	workout_id: joi.string().required(),
	workout_name: joi.string().required()
	exercises: joi.object({
		exercise_ids: joi.integer().required()
	}).unknown().required()
});
