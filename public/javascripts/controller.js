chaoz.controller('body', function ($scope) {
    //
    $scope.isOn = true;
    $scope.searchModule = function () {
        $scope.isOn = true;
    };
    $scope.talkModule = function () {
        $scope.isOn = false;
    };


});