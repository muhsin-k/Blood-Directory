'use strict';

angular.module('starter')
    .controller('oGroupCtrl', function($log, $ionicPopup, $state, $scope, $window,BloodBankService) {
        BloodBankService.getBloodDirectory().success(function(data) { 
            $scope.OGroupList = [];
            var obj, split;
            for (var i = 0; i < data.feed.entry.length; i++) {
                obj = {};

                data.feed.entry[i].content.$t.split(',').forEach(function(v) {
                    split = v.split(':');
                    obj[split[0].trim()] = split[1].trim();

                });
                if (obj.bloodgroup === 'O+ve' || obj.bloodgroup === 'O-ve')
                    $scope.OGroupList.push(obj);
            }

        }).error(function(data) {   
            $log.debug(data);
        });
        $scope.changedValue = function(value) {

            $scope.tempOGroupList = [];
            for (var i = 0; i < $scope.OGroupList.length; i++) {
                if ($scope.OGroupList[i].bloodgroup === value) {

                    $scope.tempOGroupList.push($scope.OGroupList[i]);
                }
            };

            console.log($scope.tempOGroupList);
        };
        $scope.call = function(mobNo) {

            $window.location.href = 'tel:' + mobNo;
        };

    });
