angular.module('currencyApp').controller("CurrencyController", ['$scope', '$http', function ($scope, $http) {

    $scope.what = 1;
    $scope.from = 'EUR';
    $scope.to = 'USD';
    $scope.result = 'En cours...';
    $scope.history = [];

    $http.get('./app/data/currencymap.json').success (function(data) {
        $scope.currencies = data;
    });

    this.getResult = function() {
        this.url = 'http://rate-exchange.appspot.com/currency?' +
        'from=' + $scope.from +
        '&to=' + $scope.to +
        '&q=' + $scope.what +
        '&callback=JSON_CALLBACK';

        $http.jsonp(this.url).success(function(data) {
            $scope.result = data.v;
        });
    };

    this.swap = function() {
        this.tmp = $scope.from;
        $scope.from = $scope.to;
        $scope.to = this.tmp;
    };
}]);