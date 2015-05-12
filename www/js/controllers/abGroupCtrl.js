'use strict';

angular.module('starter')
    .controller('abGroupCtrl', function($log, $ionicPopup, $state, $scope,$window, BloodBankService) {
        BloodBankService.getBloodDirectory().success(function(data) { 
            $scope.ABGroupList = [];
            var obj, split;
            for (var i = 0; i < data.feed.entry.length; i++) {
                obj = {};

                data.feed.entry[i].content.$t.split(',').forEach(function(v) {
                    split = v.split(':');
                    obj[split[0].trim()] = split[1].trim();

                });
                if (obj.bloodgroup === 'AB+ve' || obj.bloodgroup === 'AB-ve')
                    $scope.ABGroupList.push(obj);
            }

        }).error(function(data) {   
            $log.debug(data);
        });
        $scope.changedValue = function(value) {
            $scope.tempAbGroupList = [];
            for (var i = 0; i < $scope.ABGroupList.length; i++) {
                //   console.log(i + ":" + $scope.ABGroupList[i].bloodgroup)
                if ($scope.ABGroupList[i].bloodgroup === value) {

                    $scope.tempAbGroupList.push($scope.ABGroupList[i]);
                }
            };
        }
        $scope.call = function(mobNo) {

            $window.location.href = 'tel:' + mobNo;
        };

    });
