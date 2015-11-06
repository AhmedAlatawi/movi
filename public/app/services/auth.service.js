"use strict";

angular.module('app')
    .service('authService', function($http, $q, $state) {
        var service = this;

        service.loggedUser = null;

        service.isLoggedIn = function() {
            return !!service.loggedUser;
        };

        service.getLoggedUser = function() {
            var deferred = $q.defer();

            if (!service.loggedUser) {
                $http.get('/logged-user')
                    .success(function(data) {
                        service.loggedUser = data;
                        deferred.resolve(service.loggedUser);
                    });
            }
            return deferred.promise;
        };

        service.login = function(username, password) {
            var deferred = $q.defer();

            $http.post('/login', {username: username, password: password})
                .success(function(data) {
                    if (data.success) {
                        service.loggedUser = data.user;
                        $state.go('tracker');

                        deferred.resolve(service.loggedUser);
                    } else {
                        deferred.reject();
                    }
                })
                .error(function() {
                    deferred.reject();
                });

            return deferred.promise;
        };

        service.logout = function() {
            if (service.loggedUser) {
                $http.get('/logout')
                    .success(function() {
                        service.loggedUser = null;
                    });
            }
        };

        service.register = function(userData) {
            var deferred = $q.defer();

            $http.post('/register', userData)
                .success(function(data) {
                    if (data.success) {
                        service.login(userData.username, userData.password);
                        service.loggedUser = userData;
                        deferred.resolve();
                    }
                })
                .error(function() {
                   deferred.reject();
                });

            return deferred.promise;
        };
    });