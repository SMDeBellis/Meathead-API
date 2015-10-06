process.env.NODE_ENV = "test"
var server = require("../../server")
var should = require("chai").should()
var db = require("../../db")
var http = require("http")

var header = {
	"host" : "localhost",
	"port" : "8080",
	"path" : "/workouts/exercises",
	"method" : "POST",
	"headers" : {
		"Content-Type" : "application/json"
	}
}

describe('Exercise Listing Tests', function(){
	var data = [['11111111-1111-1111-1111-111111111112', 1],['11111111-1111-1111-1111-111111111112',2],['11111111-1111-1111-1111-111111111112',3],['11111111-1111-1111-1111-111111111112',4],['11111111-1111-1111-1111-111111111112',5]];
	beforeEach(function(done){
		server.listen('8080', function(err, result){
			if(err){ done(err); }
		});
		db.query('INSERT INTO workout_exercise_list_rel(workout_id, exercise_list_id) VALUES ?', [data], function(err){
			if(err){ console.log(err); }
		});
        done();
	});

	it('should exist', function (done) {
    	should.exist(server);
		done();
  	});

	afterEach(function(done){
		server.close();
		db.query('DELETE FROM workout_exercise_list_rel WHERE workout_id = ?', data[0][0], function(rows, err){
			if(err){ console.log(err); }
		});
		done();
	});
	//ADD BEFORE and AFTER EACH HERE
	//ADD TESTS HERE
});
	
process.env.NODE_ENV = 'production'
