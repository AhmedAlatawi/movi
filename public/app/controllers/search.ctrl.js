angular.module('app')
    .controller('SearchCtrl', function(movieService) {
        var vm = this;


        vm.movieCollection = [];

        vm.getMovies = function (query) {
            movieService.getMoviesbyTitle(query)
                .then(function(result) {
                   console.log(result)
                }, function() {
                    console.log('error');
                });
        };

    });