'use strict';

angular.module('starter')
    .controller('aGroupCtrl', function($log, $ionicPopup, $state, $scope, $rootScope, $ionicSideMenuDelegate) {

        $scope.changedValue = function(value) {
             $scope.aGroupList = [{
                "firstName": "Muhsin.K",
                "address": "Eramam Poyil",
                "phoneNumber": "9633123452",
                "group": "A+ve"
            }, {
                "firstName": "Sathu.k",
                "address": "Eramam Kappalam",
                "phoneNumber": "9633123452",
                "group": "A-ve"
            }, {
                "firstName": "Shammu",
                "address": "Eramam Bank",
                "phoneNumber": "963312344",
                "group": "A+ve"
            }];

            $scope.tempAGroupList = [];
            console.log(value);
            for (var i = 0; i < $scope.aGroupList.length; i++) {
                console.log(i+":"+$scope.aGroupList[i].group)
                if ($scope.aGroupList[i].group === value) {
                   
                    $scope.tempAGroupList.push($scope.aGroupList[i]);
                }
            };

           console.log( $scope.tempAGroupList);
        }

    });
