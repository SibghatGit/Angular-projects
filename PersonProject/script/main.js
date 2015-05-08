var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'read.html',
        controller: 'Index'
    })
});

app.controller('Index', Index);

function Index($scope, $http) {

    $http.get('json/person.json')
        .then(function (res) {
            $scope.persons = res.data;
        });


}