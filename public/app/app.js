"use strict";

angular.module('app', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'SignupCtrl as signupCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

});