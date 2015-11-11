"use strict";

angular.module('app')
    .service('movieService', function($q, $http, genresService, _) {
        var service = this;

        var BASE_URL = 'https://api.themoviedb.org/3/',
            SEARCH_API_PATH = 'search/movie',
            POSTER_BASE_PATH = 'http://image.tmdb.org/t/p/',
            POSTER_SIZE_CODES = {
                SMALL: "w154",
                MEDIUM: "w342",
                LARGE: "w500",
                ORIGINAL: "original"
            },
            API_KEY = 'fa64f5e6000282025165656b68b67dcb',
            GENRES = genresService;


        service.getMoviesbyTitle = function(query) {
            var deferred = $q.defer();

            $http.get(BASE_URL + SEARCH_API_PATH, {
                params: {
                    'api_key': API_KEY,
                    'query': query
                }
            })
                .then(function(response) {
                    if (!response.data.results.length) {
                        deferred.reject('No movies found.');
                    } else {
                        var movies = [];

                        _.each(response.data.results, function(movie) {
                            movies.push({
                                id: movie.id,
                                title: movie.original_title,
                                description: movie.overview,
                                poster_url: createPosterUrl(movie.poster_path, POSTER_SIZE_CODES.LARGE),
                                genres: parseGenres(movie.genre_ids)
                            });
                        });

                        deferred.resolve(movies);
                    }

                }, function() {
                    deferred.$$reject('An error has occurred. Please try again later!');
                });

            return deferred.promise;
        };


        function parseGenres(ids) {
            var genres = [];

            _.each(ids, function(val) {
                var genre = _.find(GENRES, {id: val});
                if (!!genre) {
                    genres.push(genre.name);
                }
            });

            return genres.join(", ");
        }

        function createPosterUrl(path, size) {
            return POSTER_BASE_PATH + size + path;
        }
    });