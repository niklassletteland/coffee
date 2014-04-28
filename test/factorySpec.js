'use strict';


var factory;

beforeEach(function() {
    module("coffeeApp");
    inject(function($injector) {
        factory = $injector.get('CoffeeTypesFactory');
    });
});

describe('CoffeeTypesFactory', function() {
    describe('getCoffeeTypes()', function() {
        it('should return an array of coffee types', function() {
            var expectedCoffeeTypes = [
                'drip coffee'
               ,'cappuccino'
               ,'latte'
               ,'espresso'
            ];
            var coffeeTypes = factory.getCoffeeTypes();
            expect(coffeeTypes).toEqual(expectedCoffeeTypes);
        });
    });
});