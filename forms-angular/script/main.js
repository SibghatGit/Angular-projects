var app = angular.module("app", []);
app.controller("form", formController);


function formController($scope, $log) {
    $scope.userType = "";
    $scope.submitted = false;
    $scope.save = function (a) {
        $scope.submitted = true;

        $log.debug(a);
    }

}