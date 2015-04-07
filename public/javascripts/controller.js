chaoz.controller('body', function ($scope) {
    //
    $scope.isOn = true;
    $scope.tabHighlight = function () {
        $scope.isOn = !$scope.isOn;
    }


});