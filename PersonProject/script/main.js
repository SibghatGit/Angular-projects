var app = angular.module('app', ['ngRoute', 'ng']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'read.html',
            controller: 'Index'
        })
        .when('/create', {
            templateUrl: 'create.html',
            controller: 'create'
        })
        .when('/detail/:id', {
            templateUrl: 'detail.html',
            controller: 'detail'
        })
}).controller('Index', ['$scope', '$http', 'person', function Index($scope, $http, Person) {
    $http.get('json/person.json')
        .then(function (res) {
            Person.newData(res.data);
            $scope.persons = Person.get();
        });
    $scope.submit = function (person) {
        $("#createPerson").modal('toggle');
        $scope.Person = {};
    }
}]).controller('create', ['$scope', 'person', '$location', function Create($scope, person, $location) {

}]).controller('detail', ['$scope', 'person', '$routeParams', function Detail($scope, person, $routeParams) {
    debugger;
    var person = person.get($routeParams.id);

}]).controller('HeaderController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}).directive('createPerson', ['person', function (Person) {
    var controller = ['$scope', 'person', function ($scope, person) {
        $scope.submit = function (person) {
            $("#createPerson").modal('toggle');
            Person.add(person);
            $scope.Person = {};
        }
    }];
    return {
        scope: {
            datasource: '='
        },
        controller: controller,
        templateUrl: '_create.html'
    }
}]).factory('person', ['$location', function person($location) {
    var Persons = new Array();

    function getPerson(data) {
        return (typeof (data) != "undefined") ? Persons[data] : Persons;
        // return Persons;
    }
    return {
        get: getPerson,
        add: function (data) {
            Persons.push(data);
            $location.path('/');
        },
        newData: function (data) {
            Persons = Persons.length == 0 ? data : Persons;
        }
    }
    }]);