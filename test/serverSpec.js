var expect = require("chai").expect;
var server = require("../server.js");
 
describe("Server", function(){

	describe('#test', function() {
		it('true should equal true - a truism, by job.', function() {
			expect(true).to.equal(true);
		});
	});

});