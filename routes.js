/**
	Routes for the API
**/
var server = require('./server');
var resources = require('./resources');

//users
server.get('/login', resources.login.verify);
server.put('/register/:name/:email', resources.login.register);

//workouts
server.get('/workouts/:user', resources.workouts.list);
server.put('/workouts/new/:id', resources.workouts.create);
server.del('/workouts/remove/:workout', resources.workouts.del );

//exercises
server.get('/workouts/exercises', resources.exercises.list);
server.put('/workouts/exercises/new/:exercises', resources.exercises.create);
server.del('/workouts/exercises/:exercise', resources.exercises.del);
