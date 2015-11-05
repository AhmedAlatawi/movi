"use strict";

angular.module('app')
    .controller('NavbarAuthCtrl', function(AuthService, $http) {
        var vm = this;

        //  Verify if a session is opened first of all
        AuthService.getLoggedUser()
            .then(function(user) {
                vm.loggedUser = user;
            });

        vm.loggedUser = {};

        vm.isLoggedIn = AuthService.isLoggedIn;

        vm.authenticate = function(username, password) {
            AuthService.login(username, password)
                .then(function(user) {
                    vm.loggedUser = user;
                })
                .catch(function() {
                    console.log('Invalid login!');
                });
        };

        vm.logout = AuthService.logout;


    });