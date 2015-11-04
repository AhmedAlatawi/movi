"use strict";

angular.module('app')
    .controller('NavbarAuthCtrl', function($http) {
        var vm = this;

        vm.authenticate = function(username, password) {
            $http.post('/login', { username: username, password: password})
                .then(function(response) {
                    console.log(response.data);
                });
        };
    });