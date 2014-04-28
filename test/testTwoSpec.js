'use strict';

beforeEach(function() {
    module("coffeeApp");
});

describe('CoffeeTypesController', function() {

    var $scope, $rootScope, createController;

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();

        var $controller = $injector.get('$controller');

        createController = function() {
            return $controller('CoffeeTypesController', {
                '$scope': $scope
            });
        };
    }));

    it('should have a $scope variable coffeeTypes', function() {
        var controller = createController();
        expect($scope.coffeeTypes).toBeDefined();
    });

    it('should have a $scope variable set to some coffee types.', function() {
        var controller = createController();

        var expectedCoffeeTypes = [
            'drip coffee'
           ,'cappuccino'
           ,'latte'
           ,'espresso'
        ];

        expect($scope.coffeeTypes).toEqual(expectedCoffeeTypes);
    });

});