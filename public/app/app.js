"use strict";

angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tracker', {
                url: '/tracker',
                template: '<h1>Tracker page!</h1>'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/views/signup.html',
                controller: 'SignupCtrl as signupCtrl'
            });

        $urlRouterProvider.otherwise('/tracker');

});