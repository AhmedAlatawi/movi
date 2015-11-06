"use strict";

angular.module('app')
    .controller('NavbarAuthCtrl', function(authService, toastrService) {
        var vm = this;

        //  Verify if a session is opened first of all
        authService.getLoggedUser()
            .then(function(user) {
                vm.loggedUser = user;
            });

        vm.loggedUser = authService.loggedUser;

        vm.isLoggedIn = authService.isLoggedIn;

        vm.authenticate = function(username, password) {
            authService.login(username, password)
                .then(function(user) {
                    vm.loggedUser = user;
                    toastrService.success('You have successfully logged in.', 'Success!');
                })
                .catch(function() {
                    toastrService.error('Please check your credentials.', 'Something went wrong!');
                });
        };

        vm.logout = authService.logout;


    });