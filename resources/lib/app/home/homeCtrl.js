    (function() {
        angular.module('boilerplate.home', ['ui.router'])
            .config(ConfigLoader)
            .controller('homeCtrl', homeCtrl);

        ConfigLoader.$inject = ['$stateProvider', '$urlRouterProvider'];

        function ConfigLoader($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('web.home', {
                    url: "/home",
                    templateUrl: "app/home/home.html",
                    controller: 'homeCtrl'
                });
        }
        homeCtrl.$inject = ['$scope'];

        function homeCtrl($scope, Service) {





        }
    })();
