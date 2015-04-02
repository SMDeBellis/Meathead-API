var joi = require('joi');

module.exports = function validator(schema){
	return function(request, response, next){
		joi.validate(request.body, schema, function(err){
			if(err){
				next(err);
			}
			else {
				next();
			}
		});	
	};
};
