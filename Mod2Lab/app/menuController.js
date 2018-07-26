app.controller('menuController', [
    '$scope',
    function ($scope) {
        $scope.model = {title: 'Our Menu'};

        $scope.changeMainDish = function(name, value){
            $scope.model.mainDish = {item:name, itemValue:value};
        }

        $scope.$watch('model.mainDish.item', function(newValue, oldValue){
            if(newValue === 'BBQ Chicken Pizza') {
                alert('You have selected the BBQ Chicken Pizza');
            }
        })
    }
]);