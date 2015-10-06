process.env.NODE_ENV = "test"
var server = require("../../server")
var should = require("chai").should()
var db = require("../../db")
var http = require("http")

var header = {
	"host" : "localhost",
	"port" : "8080",
	"path" : "/workouts/remove",
	"method" : "POST",
	"headers" : {
		"Content-Type" : "application/json"
	}
}
		
describe('Workout Deletion Tests', function(){
	before(function(done){
		server.listen('8080', function(err, result){
			if(err){
				done(err);
			}
			else{
				done();
			}
		});
		db.query('INSERT INTO workout(user_id, workout_name, workout_id) VALUE("11111111-1111-1111-1111-111111111111", "Tough Workout", "11111111-1111-1111-1111-111111111111")', function(err){
			if(err){
				console.log(err);
			}
		});
	});
	
	it('should exist', function (done) {
		should.exist(server);
    		done();
  	});

	//ADD BEFORE and AFTER EACH HERE
	beforeEach(function(done){
		db.query('INSERT INTO workout(user_id, workout_name, workout_id) VALUE("11111111-1111-1111-1111-111111111111", "Tough Workout", "11111111-1111-1111-1111-111111111111")', function(err){
			if(err){
				console.log(err);
			}
		});
		done();
	});

	//ADD TESTS HERE
	it('should respond correctly to valid deletion', function(done) {
		var postData = JSON.stringify({
			"user_id" : "11111111-1111-1111-1111-111111111111",
			"workout_name" : "Tough Workout",
			"workout_id" : "11111111-1111-1111-1111-111111111111"
		});
		var request = http.request(header, function(response){
			response.statusCode.should.eql('200');
			var data = JSON.parse(response.body);
			data['code'].should.eql('200 OK');		
		});
		request.write(postData);
		done();
	});

	it('should respond correctly to invalid user_id', function(done) {
		var postData = JSON.stringify({
			"user_id" : "11111111-1111-1111-1111-111111111112",
			"workout_name" : "Tough Workout",
			"workout_id" : "11111111-1111-1111-1111-111111111111"
		});
		var request = http.request(header, function(response){
			response.statusCode.should.eql('200');
			var data = JSON.parse(response.body);
			data['code'].should.eql('201 USER ERROR');		
		});
		request.write(postData);
		done();

	});
	
	it('should respond correctly to invalid workout_id', function(done) {
		var postData = JSON.stringify({
			"user_id" : "11111111-1111-1111-1111-111111111111",
			"workout_name" : "Tough Workout",
			"workout_id" : "11111111-1111-1111-1111-111111111112"	
		});
		var request = http.request(header, function(response) {
			response.statusCode.should.eql('200');
			var data = JSON.parse(response.body);
			data['code'].should.eql('203 WORKOUT ID ERROR');
		});
		request.write(postData);
		done();
	});

	after(function(done){
		server.close();
		db.query('DELETE FROM workout WHERE workout_name = "Tough Workout"');
		done();
	});
});
	
process.env.NODE_ENV = 'production'
