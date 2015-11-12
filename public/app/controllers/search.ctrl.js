angular.module('app')
    .controller('SearchCtrl', function(movieService, userService, authService) {
        var vm = this;


        vm.moviesCollection = [];

        vm.errorMessage = null;

        vm.getMovies = function (query) {
            vm.moviesCollection = [];
            vm.errorMessage = null;

            movieService.getMoviesbyTitle(query)
                .then(function(result) {
                   vm.moviesCollection = result;
                }, function(msg) {
                    vm.errorMessage = msg;
                });
        };

        vm.addToTracked = function(index) {
            userService.addToTracked(authService.loggedUser.username, vm.moviesCollection[index])
                .then(function () {
                    console.log('Success');
                }, function(msg) {
                    console.log(msg);
                });
        }
    });