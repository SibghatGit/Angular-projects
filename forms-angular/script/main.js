var app = angular.module("app", []);
app.controller("form", formController);


function formController($scope, $log) {
    $scope.userType = "";
    $scope.save = function (a) {
        $log.debug(a);
    }

}