/**
	Routes for the API
**/
var server = require('./server');
var resources = require('./resources');
var validator = require('./middleware/validator');
var schemas = require('./schemas');

//users
server.put('/login', validator(schemas.loginSchema), resources.login.verify);
server.put('/register', validator(schemas.registerSchema), resources.login.register);

//workouts
server.get('/workouts', resources.workouts.list);
server.put('/workouts/new', validator(schemas.workoutSchema) , resources.workouts.create);
server.del('/workouts/remove', resources.workouts.del );

//exercises
// returns a list of exercises to a corresponding workout given by :id which maps to
// a workout id.
server.get('/workouts/exercises/:id', resources.exercises.list);

//Loads a list into the data base a list of exercise corresponding to a single workout
server.put('/workouts/exercises/', validator(schemas.exerciseSchema) , resources.exercises.create);

//removes all exercises that correspond to a workout_id
server.del('/workouts/exercises/:id', resources.exercises.del);

//Exercise List
//server.get('/exercise_list', resources.exerciseList.list);
