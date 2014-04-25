describe('Test', function(){
  beforeEach(module('coffeeApp'));

  it('should should show true to be true', function() {
    expect(true).toBe(true);
  });

  it('should be defined', inject(function($controller, $rootScope) {
  	scope = $rootScope.$new();
    CoffeeTypesController = $controller('CoffeeTypesController', { $scope: scope });
    expect(CoffeeTypesController).toBeDefined();
  }));

  it('should have property $coffeeTypes', inject(function($controller, $rootScope) {
  	scope = $rootScope.$new();
    CoffeeTypesController = $controller('CoffeeTypesController', { $scope: scope });
    expect(scope.coffeeTypes).toBeDefined();
  }));

  it('should have property $coffeeTypes', inject(function($controller, $rootScope) {
  	scope = $rootScope.$new();
    CoffeeTypesController = $controller('CoffeeTypesController', { $scope: scope });
    expect(scope.coffeeTypes).toEqual(['drip coffee', 'cappuccino', 'latte', 'espresso']);
  }));
  

});