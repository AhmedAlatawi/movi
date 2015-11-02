    "use strict";

    angular.module('app')
        .config(function($stateProvider) {
            $stateProvider
                .state('movi.signup', {
                    url: '/signup',
                    views: {
                        'signup@': {
                            templateUrl: 'app/views/signup.html',
                            controller: 'SignupCtrl as signupCtrl'
                        }
                    }
                });
        })

        .controller('SignupCtrl', function() {
            console.log('invoked controller');
        });