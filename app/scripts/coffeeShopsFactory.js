coffeeApp.factory('CoffeeShopsFactory', [ 
    
    function( 
    
    ) {

        var factory = {};

        factory.getCoffeeShops = function() {
            return [
		        'Young Hickory'
		       ,'Coffe & Tea Collective'
		       ,'Pergolessi'
		       ,'Lulu\'s'
		    ];
        }

        return factory;

    }
]);
