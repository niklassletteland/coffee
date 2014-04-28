describe('Test', function(){
  /*beforeEach(module('coffeeApp'));

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
*/

    beforeEach(function () {
      module("coffeeApp");
    });

    it('should have property $coffeeTypes', inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      CoffeeTypesController = $controller('CoffeeTypesController', { $scope: scope });
      expect(scope.coffeeTypes).toBeDefined();
    }));

    var CoffeeTypesController;

    beforeEach(inject(function ($injector, $controller, $rootScope) {
        this.scope = $rootScope.$new();
        //CoffeeTypesController = $injector.get('CoffeeTypesController');

        $controller('CoffeeTypesController', {
            $scope: this.scope,
            coffeeTypes: this.getCoffeeTypes()
        });
    })); 

    describe("CoffeeTypesController", function () {
        it("should have 2 persons", function () {
            CoffeeTypesController.getCoffeeTypes();

            expect(true).toEqual(true);
        });
    });



});