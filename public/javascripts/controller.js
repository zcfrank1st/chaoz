chaoz.controller('body', function ($scope) {
    $scope.isOn = true;
    $scope.searchModule = function () {
        $scope.isOn = true;
    };
    $scope.talkModule = function () {
        $scope.isOn = false;
    };
});


chaoz.controller('search', function($scope){
    $scope.default = true;
    $scope.find = function () {
        $scope.default = false;
    };

    $scope.return = function () {
        $scope.default = true;
    }
});