coffeeApp.factory('CoffeeTypesFactory', [ 
    
    function( 
    
    ) {

        var factory = {};

        factory.getCoffeeTypes = function() {
            return [
                'drip coffee'
               ,'cappuccino'
               ,'latte'
               ,'espresso'
               ,'fred'
            ];
        }

        return factory;

    }
]);
