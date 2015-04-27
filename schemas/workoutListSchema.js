var joi = require('joi')

module.exports = joi.object().required().keys({
	user_id: joi.string().length(36).required()
});
