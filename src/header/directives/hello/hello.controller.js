export default ["$scope", "$interval", function helloController($scope, $interval) {
    let i = 0;
    $scope.hello = 'Hello';
    $interval(function () {
        $scope.hello = "Hello " + ++i;
    }, 1000);

}];