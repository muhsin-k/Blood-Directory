'use strict';

angular.module('starter')
    .controller('headerCtrl', function($log, $ionicPopup, $state, $scope, $rootScope, $ionicSideMenuDelegate) {
       
        $scope.toggleMenu = function() {
               $ionicSideMenuDelegate.toggleLeft();
           
        };
    });
