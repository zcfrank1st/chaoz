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
        $scope.result = true;
        $scope.pagination = true;
    };

    $scope.latest10 = function () {
        $scope.default = false;
        $scope.result = true;
        $scope.pagination = false;
    };

    $scope.return = function () {
        $scope.default = true;
        $scope.result = false;
        $scope.shareList = false;
    };

    $scope.share = function () {
        $scope.default = false;
        $scope.result = false;
        $scope.shareList = true;
    };


    // angular resource 请求
    $scope.items = [
        {
            type: "ebook",
            name: "book1",
            description: "book",
            link: "",
            comment: "",
            timestamp: "2015-04-08"
        },
        {
            type: "torrent",
            name: "everyday",
            description: "bt file",
            link: "",
            comment: "",
            timestamp: ""
        },
        {
            type: "video",
            name: "movie",
            description: "video",
            link: "",
            comment: "",
            timestamp: ""
        }
    ]
});