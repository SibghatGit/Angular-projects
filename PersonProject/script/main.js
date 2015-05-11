var app = angular.module('app', ['ngRoute']);

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
}).controller('Index', ['$scope', '$http', 'person', function Index($scope, $http, Person) {
    debugger;

    $http.get('json/person.json')
        .then(function (res) {

            Person.newData(res.data);
            $scope.persons = Person.get();
        });

    $scope.submit = function (Person) {
        $("#createPerson").modal('toggle');
        $scope.persons.push(Person);
        $scope.Person = {};
    }

    function reset() {

    }
}]).controller('create', ['$scope', 'person', function Create($scope, person) {
    $scope.Person = {};
    debugger;
    person.set({
        "firstname": "Tate",
        "lastname": "Imani",
        "age": 64,
        "company": "Urna Associates"
    });

}]).factory('person', [function person() {

    var Persons = new Array();

    function getPerson() {
        return Persons;
    }
    return {
        get: getPerson,
        set: function (data) {
            Persons.push(data);
        },
        newData: function (data) {
            debugger;
            Persons = Persons.length == 0 ? data : Persons;
        }
    }

    }]);






app.directive('createPerson', function () {
    var controller = ['$scope', function ($scope) {


        function init() {
            $scope.persons = $scope.datasource;
        }
        init();

        $scope.submit = function (Person) {
            debugger;
            //init();
            $("#createPerson").modal('toggle');
            $scope.persons.push(Person);
            $scope.Person = {};
        }

    }];
    return {
        scope: {
            datasource: '=',
            add: '&',
        },
        controller: controller,
        templateUrl: '_create.html'


    }
});