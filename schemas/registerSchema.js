var joi = require('joi');

module.exports = joi.object().required().keys({
	user_name: joi.string().required(),
	email: joi.string().required(),
	pass_hash: joi.string().required()
});
