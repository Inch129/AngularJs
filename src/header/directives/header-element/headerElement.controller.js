export default ["$scope" , "apiService", function headerElementController($scope, apiService) {

    apiService.data.then( data => {
        $scope.title = data.data.title;
        $scope.mainText = data.data.body;
    });


}];