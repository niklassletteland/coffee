'use strict';

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


coffeeApp.controller('CoffeeShopsController', [
    '$scope'
    ,'CoffeeShopsFactory'
    , function(
        $scope
       ,CoffeeShopsFactory
    ) {

    $scope.coffeeShops = CoffeeShopsController.getCoffeeShops();

}]);