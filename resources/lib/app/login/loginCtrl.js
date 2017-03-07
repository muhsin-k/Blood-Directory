(function() {
    angular.module('boilerplate.login', ['ui.router'])
        .config(ConfigLoader)
        .controller('loginCtrl', loginCtrl);

    ConfigLoader.$inject = ['$stateProvider', '$urlRouterProvider'];

    function ConfigLoader($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "app/login/login.html",
                controller: 'loginCtrl'
            });
    }

    loginCtrl.$inject = ['$scope', '$state'];

    function loginCtrl($scope, $state) {
        $scope.login = function() {
            $state.go('web.home');
        }
    }
})();
