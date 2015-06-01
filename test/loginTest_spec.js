process.env.NODE_ENV = "test"
var server = require("../server")
var assert = require("assert")
var should = require("should")
var db = require("../db")
var http = require("http")

var header = {
	"host" : "localhost",
	"port" : "8080",
	"path" : "/login",
	"method" : "POST",
	"headers" : {
		"Content-Type" : "application/json"
	}
}
		
describe('Login Verification Tests', function(){
	before(function(done){
		server.listen('8080', function(err, result){
			if(err){
				done(err);
			}
			else{
				done();
			}
		});
		db.query('INSERT INTO users(user_id, user_name, email, password) 			  VALUE("11111111-1111-1111-1111-111111111111", "Jimmy", "me@awesome.com", "password"');

	});
	
	after(function(done){
		server.close();
		db.query("DELETE FROM users WHERE user_name = ?", "Jimmy");
		done();
	});

	it('should exist', function (done) {
    		should.exist(server);
    		done();
  	});

	it('should verify successfully', function(done) {
		var postData = JSON.stringify({
			"user_name" : "Jimmy",
			"pass_hash" : "password"
		});
		var request = http.request(header, function(response){
			response.statusCode.should.eql('200');
			var data = JSON.parse(response.body);
			data['code'].should.eql('200 OK');
		});
		request.write(postData);
		done();
	});
	
	it('should respond correctly to an invalid user', function(done) {
		var postData = JSON.stringify({
			"user_name" : "Dylan",
			"pass_hash" : "password"
		});
		var request = http.request(header, function(response){
			response.statusCode.should.eql('200');
			var data = JSON.parse(response.body);
			data['code'].should.eql('406 NONEXISTANT');
		});
		request.write(postData);
		done();
	});

	it('should respond correctly to an invalid user', function(done) {
		var postData = JSON.stringify({
			"user_name" : "Jimmy",
			"pass_hash" : "wrongPassword"
		});
		var request = http.request(header, function(response){
			response.statusCode.should.eql('200');
			var data = JSON.parse(response.body);
			data['code'].should.eql('406 NONEXISTANT');
		});
		request.write(postData);
		done();
	});

});
	
process.env.NODE_ENV = 'production'
