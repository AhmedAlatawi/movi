"use strict";

angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('movi', {
                url: '',
                abstract: true
            });

        $urlRouterProvider.otherwise('/');

});