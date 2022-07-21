var testapp = angular.module("ClienteModule", []);
testapp.controller("ClienteController", function ($scope, $http)
{

    $http.get('https://localhost:44313/api/Cliente').then(function (response) {
        $scope.ListCliente = response.data;
    });
});