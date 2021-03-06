app.controller('labController', [
    '$scope', '$timeout', '$q', 'gitHub',
    function ($scope, $timeout, $q, gitHub) {
        $scope.model = {number: 0, result: 'Ready'};
        $scope.checkOddNumber = checkOddNumber;
        $scope.getRepos = getRepos;
        $scope.loadDetail = loadDetail;

        function getRepos(org) {
            gitHub.getAll({ org: org }).$promise
                .then(function(response) {
                    $scope.model.repos = response;
                }, function(response) {
                    alert('No results.');
                    console.log(response.status);
                });            
        }

        function loadDetail(name, org) {
            gitHub.getDetail({ id: name, org: org }).$promise
                .then(function(response) {
                    $scope.model.detail = response;
                }, function(response) {
                    alert('Error: ' + response.status);
                });
        }

        function checkOddNumber(input) {
            $scope.model.result = 'Working...';
            checkOddNumberHandler(input).then(function(result) {
                $scope.model.result = 'Success: ' + result;
            }, function(result) {
                $scope.model.result = 'Error: ' + result;
            })
        }

        function checkOddNumberHandler(input) {
            var defer = $q.defer();

            $timeout(function() {
                if(isNumberOdd(input)) {
                    defer.resolve('Yes, an odd number');
                } else {
                    defer.reject('Not an odd number');
                }
            }, 1000);

            return defer.promise;
        }

        function isNumberOdd(input) {
            return !isNaN(input) && input % 2 == 1;
        }
    }
]);