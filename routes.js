
var server = require('./server');
var resources = require('./resources');
var validator = require('./middleware/validator');
var schemas = require('./schemas');



/**
	Routes for the API
**/

//users
server.post('/login', validator(schemas.loginSchema), resources.login.verify);
server.post('/register', validator(schemas.registerSchema), resources.login.register);

//workouts
server.post('/workouts', validator(schemas.workoutListSchema), resources.workouts.listworkouts);

//needs tests
server.post('/workouts/new', validator(schemas.workoutSchema) , resources.workouts.create);
server.post('/workouts/remove', validator(schemas.workoutDeleteSchema), resources.workouts.del );

// returns a list of exercises to a corresponding workout
server.post('/workouts/exercises', validator(schemas.workoutExerciseListSchema), resources.workouts.listexercises);





//Loads a list into the data base a list of exercise corresponding to a single workout
//server.put('/workouts/exercises/', validator(schemas.exerciseSchema) , resources.exercises.create);

//removes all exercises that correspond to a workout_id
//server.del('/workouts/exercises/:id', resources.exercises.del);

//Exercise List
//server.get('/exercise_list', resources.exerciseList.list);
