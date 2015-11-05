"use strict";

angular.module('app')
    .controller('SignupCtrl', function(AuthService) {
        var vm = this;

        vm.register = function(fullname, username, email, password, passwordcheck) {
            AuthService.register({
                fullName: fullname,
                username: username,
                email: email,
                password: password,
                passwordCheck: passwordcheck
            });
        }
    });