(function() {
    angular.module('boilerplate.contactus', ['ui.router'])
        .config(ConfigLoader)
        .controller('contatUsCtrl', contatUsCtrl);

    ConfigLoader.$inject = ['$stateProvider', '$urlRouterProvider'];

    function ConfigLoader($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('web.contactus', {
                url: "/contactus",
                templateUrl: "app/contactus/contactus.html",
                controller: 'contatUsCtrl'
            });
    }

    function contatUsCtrl($scope) {

    }
})();
