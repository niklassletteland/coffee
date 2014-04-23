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
    , function(
        $scope
    ) {

    $scope.coffeeShops = [
        'Young Hickory'
       ,'Coffe & Tea Collective'
       ,'Pergolessi'
       ,'Lulu\'s'
    ];

}]);