'use strict';

angular.module('starter')
    .controller('aGroupCtrl', function(BloodBankService, $http, $log, $window, $ionicPopup, $state, $scope, $rootScope, $ionicSideMenuDelegate) {

        BloodBankService.getBloodDirectory().success(function(data) { 
            $scope.AGroupList = [];
            var obj, split;
            for (var i = 0; i < data.feed.entry.length; i++) {
                obj = {};

                data.feed.entry[i].content.$t.split(',').forEach(function(v) {
                    split = v.split(':');
                    obj[split[0].trim()] = split[1].trim();

                });
                if (obj.bloodgroup === 'A+ve' || obj.bloodgroup === 'A-ve')
                    $scope.AGroupList.push(obj);
            }

        }).error(function(data) {   });
        $scope.changedValue = function(value) {

            $scope.tempAGroupList = [];
            console.log(value);
            for (var i = 0; i < $scope.AGroupList.length; i++) {
                console.log(i + ":" + $scope.AGroupList[i].bloodgroup)
                if ($scope.AGroupList[i].bloodgroup === value) {
                    $scope.tempAGroupList.push($scope.AGroupList[i]);
                }
            };
        };
        $scope.call = function(mobNo) {

            $window.location.href = 'tel:' + mobNo;
        };


    });
