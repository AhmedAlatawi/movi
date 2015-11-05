"use strict";

angular.module('app')
    .factory('AuthService', function($http, $q) {

        var user = null;

        return ({
            isLoggedIn: isLoggedIn,
            getLoggedUser: getLoggedUser,
            login: login,
            logout: logout,
            register: register
        });

        function isLoggedIn() {
            return !!user;
        }

        function getLoggedUser() {
            var deferred = $q.defer();

            if (!user) {
                $http.get('/logged-user')
                    .success(function(data) {
                        user = data;
                        deferred.resolve(user);
                    });
            }
            return deferred.promise;
        }

        function login(username, password) {
            var deferred = $q.defer();

            $http.post('/login', {username: username, password: password})
                .success(function(data) {
                    if (data.success) {
                        user = data.user;
                        deferred.resolve(user);
                    } else {
                        deferred.reject();
                    }
                })
                .error(function() {
                    deferred.reject();
                });

            return deferred.promise;
        }

        function logout() {
            if (user) {
                $http.get('/logout')
                    .success(function() {
                        user = null;
                    });
            }
        }

        function register() {
            // TODO
        }
    });