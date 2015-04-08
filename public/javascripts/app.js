/**
 * Created by zcfrank1st on 4/7/15.
 */
var chaoz = angular.module('chaoz',['ui.router']);

chaoz.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/search");

    $stateProvider
        .state('search', {
            url: "/search",
            templateUrl: "template/search.html"
            //controller: ""
        })
        .state('results', {
            url: "/results",
            templateUrl: "template/results.html"
            //controller: ""
        })
        .state('talk', {
            url: "/talk",
            templateUrl: "template/talks.html"
            //controller: ""
        })
});