(function() {
    angular.module('boilerplate.aboutus', ['ui.router'])
        .config(ConfigLoader)
        .controller('aboutUsController', aboutusController);

    ConfigLoader.$inject = ['$stateProvider', '$urlRouterProvider'];

    function ConfigLoader($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('web.aboutus', {
                url: "/aboutus",
                templateUrl: "app/aboutus/aboutus.html",
                controller: 'aboutUsController'
            });
    }

    aboutusController.$inject = ['$scope'];

    function aboutusController($scope, $uibModal) {}





})();
