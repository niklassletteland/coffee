// INIT APP
var coffeeApp = angular.module( 'coffeeApp', [] );

coffeeApp.controller('CoffeeTypesController', [
    '$scope'
    ,'CoffeeTypesFactory'
    , function(
        $scope
       ,CoffeeTypesFactory
    ) {

    $scope.coffeeTypes = CoffeeTypesFactory.getCoffeeTypes();

}]);