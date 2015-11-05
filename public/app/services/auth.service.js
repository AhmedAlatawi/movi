"use strict";

angular.module('app')
    .factory('AuthService', function($http, $q, $state) {

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
                        $state.go('tracker');

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

        function register(userData) {
            var deferred = $q.defer();

            $http.post('/register', userData)
                .success(function(data) {
                    if (data.success) {
                        login(userData.username, userData.password);
                    }
                })
                .error(function() {
                   deferred.reject();
                });

            return deferred.promise;
        }
    });