var joi = require('joi')

module.exports = joi.object().required().keys({
	user_id: joi.string().required(),
	workout_id: joi.string().required(),
	workout_name: joi.string().required(),
	exercises: joi.array().min(1).items(joi.number().integer()).required()
});
