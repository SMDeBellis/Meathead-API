var joi = require('joi')

module.exports = joi.object().required().keys({
	workout_id: joi.string().length(36).required(),
	user_id: joi.string().length(36).required()
});
