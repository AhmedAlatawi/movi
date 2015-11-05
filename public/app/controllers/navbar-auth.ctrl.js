"use strict";

angular.module('app')
    .controller('NavbarAuthCtrl', function(AuthService, toastrService) {
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
                    toastrService.success('You have successfully logged in.', 'Success!');
                })
                .catch(function() {
                    toastrService.error('Please check your credentials.', 'Something went wrong!');
                });
        };

        vm.logout = AuthService.logout;


    });