var joi = require('joi');

module.exports = joi.object({
	user_name: joi.string().required(),
	pass_hash: joi.string().required()
});
