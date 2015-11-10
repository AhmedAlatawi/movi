"use strict";

angular.module('app')
    .service('movieService', function($q, $http) {
        var service = this;

        var BASE_URL = 'https://api.themoviedb.org/3/',
            SEARCH_API_PATH = 'search/movie',
            POSTER_BASE_PATH = 'http://image.tmdb.org/t/p/',
            POSTER_SIZE_CODES = {
                SMALL: "w154",
                MEDIUM: "w342",
                BIG: "w500",
                ORIGINAL: "original"
            },
            API_KEY='fa64f5e6000282025165656b68b67dcb';


        service.getMoviesbyTitle = function(query) {
            var deferred = $q.defer();

            $http.get(BASE_URL + SEARCH_API_PATH, {
                params: {
                    'api_key': API_KEY,
                    'query': query
                }
            })
                .then(function (response) {
                    console.log(response);
                    deferred.resolve()
                }, function () {
                    deferred.$$reject();
                });

            return deferred.promise;
        };

    });