var expect = require("chai").expect;

describe("CoffeeTypesFactory", function(){

	describe('.getCoffeeTypes()', function() {
 
	    //mock Application to allow us to inject our own dependencies
	    //beforeEach(module('coffeeApp'));

		it('should return an array of four coffee types', function() {
			var result = null;
			expect(result).to.equal('hello');
		});
	});

});