app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = {
            title: 'Pizza Builder',
            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
            toppings: [],
            noResultsMsg: false
        };
        
        $scope.addTopping = function (topping) {
            $scope.model.toppings.push(topping);
            $scope.model.search = null;
            $scope.model.successMsg = 'Topping added.';            
        }

        $scope.hideSuccessMsg = function() {
            $scope.model.successMsg = null;
        }
    }
]);
