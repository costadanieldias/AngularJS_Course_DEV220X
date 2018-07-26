var app = angular.module('app', []);
app.constant('basicInfo', {appTitle:'Module 1 Homework', appContent:'The Current Date is:', currentDate:new Date().toLocaleString()});
app.controller('headerController', [
    '$scope', 'basicInfo',
    function($scope, basicInfo){
        $scope.appTitle = basicInfo.appTitle;
    }
]);
app.controller('bodyController', [
    '$scope', 'basicInfo',
    function($scope, basicInfo){
        $scope.appContent = basicInfo.appContent;
        $scope.appHeader = basicInfo.appTitle;
        $scope.currentDate = basicInfo.currentDate;
    }
]); 