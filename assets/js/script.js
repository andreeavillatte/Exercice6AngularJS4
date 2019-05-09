

// Création d'un module angular du nom 'myApp'
var app = angular.module('MyApp', []);
// Création     d'un controller 'carCtrl'
app.controller('HideShowCtrl', function ($scope) {
    $scope.IsVisible = true;

    $scope.Show = function () {
        $scope.IsVisible = $scope.IsVisible = false;
    }
    $scope.Hide = function () {
        $scope.IsVisible = $scope.IsVisible = true;
    }
});
