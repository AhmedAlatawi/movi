"use strict";

angular.module('app')
    .service('userService', function($http, $q) {
        var service = this;

        service.addToTracked = function(username, movieData) {
            var deferred = $q.defer();

            $http.post('/add-tracked', {
                username: username,
                movieData: movieData
            })
                .then(function (response) {
                    if (response.data.success) {
                        deferred.resolve();
                    }
                }, function(response) {
                    if (!response.data.success) {
                        deferred.reject(response.data.msg);
                    }
                });

            return deferred.promise;
        };
    });