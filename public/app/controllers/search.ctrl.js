angular.module('app')
    .controller('SearchCtrl', function(movieService) {
        var vm = this;


        vm.moviesCollection = [];

        vm.errorMessage = null;

        vm.getMovies = function (query) {
            movieService.getMoviesbyTitle(query)
                .then(function(result) {
                   vm.moviesCollection = result;
                }, function(msg) {
                    vm.errorMessage = msg;
                });
        };

    });