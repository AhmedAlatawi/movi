angular.module('app')
    .controller('TrackedCtrl', function(userService, authService) {
        var vm = this;

        vm.trackedMovies = null;

        vm.errorMessage = null;

        vm.getTracked = function() {
            if (!authService.loggedUser) { return; }

            userService.getTracked(authService.loggedUser.username)
                .then(function (result) {
                    vm.errorMessage = null;
                    vm.trackedMovies = result;
                }, function(msg) {
                    vm.trackedMovies = null;
                    vm.errorMessage = msg;
                });
        };

        vm.getTracked();
    });