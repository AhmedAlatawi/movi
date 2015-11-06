"use strict";

angular.module('app')
    .service('authService', function($http, $q, $state) {
        var service = this,
            deferred = $q.defer();

        service.loggedUser = null;

        // Observer pattern with promises
        service.observeLoggedUser = function() {
            return deferred.promise;
        };

        service.setLoggedUser = function(user) {
            service.loggedUser = user;
            deferred.notify(service.loggedUser);
        };


        service.isLoggedIn = function() {
            return !!service.loggedUser;
        };

        service.getLoggedUser = function() {
            var deferred = $q.defer();

            if (!service.loggedUser) {
                $http.get('/logged-user')
                    .success(function(data) {
                        service.setLoggedUser(data);
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
                        service.setLoggedUser(data.user);
                        $state.go('tracker');

                        deferred.resolve();
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
                        service.setLoggedUser(null);
                    });
            }
        };

        service.register = function(userData) {
            var deferred = $q.defer();

            $http.post('/register', userData)
                .success(function(data) {
                    if (data.success) {
                        service.login(userData.username, userData.password);
                        deferred.resolve();
                    }
                })
                .error(function() {
                   deferred.reject();
                });

            return deferred.promise;
        };
    });