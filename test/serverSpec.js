var expect = require("chai").expect;
var server = require("../server.js");
 
describe("Server", function(){

	describe('#test', function() {
		it('should return "hello"', function() {
			var result = server.test();
			expect(result).to.equal('hello');
		});
	});

});