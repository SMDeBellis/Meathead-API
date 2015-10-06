process.env.NODE_ENV = "test"
var server = require("../../server")
var should = require("chai").should()
var db = require("../../db")
var http = require("http")

var header = {
	"host" : "localhost",
	"port" : "8080",
	"path" : "urlToTest  ",
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
	});
	
	after(function(done){
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
