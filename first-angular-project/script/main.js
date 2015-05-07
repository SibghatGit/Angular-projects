var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
            templateUrl: 'home.html',
            controller: 'home'
        })
        .when('/ourstory', {
            templateUrl: 'ourstory.html',
            controller: 'outstory'
        })
        .when('/service', {
            templateUrl: 'service.html',
            controller: 'service'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'contact'
        })
});

app.controller("HeaderController", HeaderController);
app.controller("home", home);
app.controller("outstory", story)
app.controller("service", service)
app.controller("contact", contact)


function HeaderController($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}

function home($scope) {

}

function story($scope) {

}

function contact($scope, $log) {

    $scope.firstname = '';
    $scope.lastname = '';
    $scope.age = 0;
    $scope.email = '';

    $scope.save = function () {
        $log.warn($scope.firstname + ' ' + $scope.lastname + ', your form has been submitted. Copy of the email has been sent to ' + $scope.email);
    }

}

function service($scope) {

}