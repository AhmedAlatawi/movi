"use strict";

angular.module('app')
    .controller('NavbarAuthCtrl', function(AuthService, $http) {
        var vm = this;


        vm.authenticate = function(username, password) {
            AuthService.login(username, password)
                .then(function(user) {
                    console.log(user);
                })
                .catch(function() {
                    console.log('Invalid login!');
                });
        };

        // Also verify if a session is opened
        vm.loggedUser = AuthService.getLoggedUser();

        vm.isLoggedIn = AuthService.isLoggedIn;


    });