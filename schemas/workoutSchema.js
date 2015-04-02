var joi = require('joi')

module.exports = joi.object().required().keys({
	user_id: joi.number().integer().required(),
	day:	joi.number().min(1).max(7).integer().required(),
	date: joi.date().required()
});
