(function() {
    'use strict';
    angular.module('faw', [
            'ui.router',
            'boilerplate.aboutus',
            'boilerplate.home',
            'boilerplate.contactus',
            'boilerplate.login',

        ])
        .config(ConfigLoader)
    ConfigLoader.$inject = ['$stateProvider', '$urlRouterProvider'];

    function ConfigLoader($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('web', {
                url: '/web',
                abstract: true,
                templateUrl: 'app/common/wrapper/wrapper.html',
            });
        $urlRouterProvider.otherwise('/login');
      }


})();
