/**
	Routes for the API
**/
var server = require('./server');
var resources = require('./resources');
var validator = require('./middleware/validator');
var schemas = require('./schemas');
//users
server.get('/login', resources.login.verify);
server.put('/register/:name/:email', validator(schemas.registerSchema), resources.login.register);

//workouts
server.get('/workouts/:user', resources.workouts.list);//Done (needs testing)
server.put('/workouts/new/:id',/* validator(schemas.workoutSchema) ,*/resources.workouts.create);
server.del('/workouts/remove/:workout', resources.workouts.del );

//exercises
server.get('/workouts/exercises', resources.exercises.list);
server.put('/workouts/exercises/new/:exercises',/* validator(schemas.exerciseSchema) ,*/ resources.exercises.create);
server.del('/workouts/exercises/:exercise', resources.exercises.del);
