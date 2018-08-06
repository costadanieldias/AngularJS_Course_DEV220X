app.controller('labController', [
    '$scope', 'registration',
    function ($scope, registration) {
        $scope.reset = reset;
        $scope.submit = submit;

        reset();

        function reset() {
            $scope.model = {};
        }

        function submit(model) {
            registration.submit(model).$promise
                .then(function(response) {
                    console.log(response);
                    reset();
                    $scope.token = response.token;
                    alert('You were registrated successfully! Here is your token: ' + response.token);
                }, function(response) {
                    alert('Error');
                });


            //alert('Submitted\n' + JSON.stringify(model));
        }
        
    }
]);