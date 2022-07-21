var testapp = angular.module("ProductoModule", []);
testapp.controller("ProductoController", function ($scope, $http)
{

    $http.get('https://localhost:44313/api/Producto').then(function (response) {
        $scope.ListProducto = response.data;
    });
});