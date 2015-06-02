process.env.NODE_ENV = "test"
var server = require("../../server")
var assert = require("assert")
var should = require("should")
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
console.log("i exist");
		
describe('Exercise Listing Tests', function(){
	before(function(done){
		server.listen('8080', function(err, result){
			if(err){
				done(err);
			}
			else{
				done();
			}
		});
		var data = [['11111111-1111-1111-1111-111111111112', 1],['11111111-1111-1111-1111-111111111112',2],['11111111-1111-1111-1111-111111111112',3],['11111111-1111-1111-1111-111111111112',4],['11111111-1111-1111-1111-111111111112',5]];
		db.getConnection(function(err, connection){
			connection.query('INSERT INTO workout_exercise_list_rel(workout_id, exercise_list_id) VALUES ?', [data], function(err){
			if(err) throw err;
			connection.end();	
			});
		});
	});		
	afterEach(function(done){
		console.log("in after function");
		db.getConnection(function(err, connection){
			debugger;
			console.log("in getConnection");
		});
		console.log("closing server");
		server.close();
		done();
	});

	it('should exist', function (done) {
    		should.exist(server);
    		done();
  	});

	//ADD BEFORE and AFTER EACH HERE

	//ADD TESTS HERE

});
	
process.env.NODE_ENV = 'production'
