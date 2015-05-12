'use strict';

angular.module('starter')
    .controller('bGroupCtrl', function($log, $ionicPopup, $state, $scope, $window,BloodBankService) {
        BloodBankService.getBloodDirectory().success(function(data) { 
            $scope.BGroupList = [];
            var obj, split;
            for (var i = 0; i < data.feed.entry.length; i++) {
                obj = {};

                data.feed.entry[i].content.$t.split(',').forEach(function(v) {
                    split = v.split(':');
                    obj[split[0].trim()] = split[1].trim();

                });
                if (obj.bloodgroup === 'B+ve' || obj.bloodgroup === 'B-ve')
                    $scope.BGroupList.push(obj);
            }
            $log.debug($scope.BGroupList);

        }).error(function(data) {   
            $log.debug(data);
        });
        $scope.changedValue = function(value) {

            $scope.tempBGroupList = [];
            console.log(value);
            for (var i = 0; i < $scope.BGroupList.length; i++) {
                //  console.log(i+":"+$scope.bGroupList[i].group)
                if ($scope.BGroupList[i].bloodgroup === value) {

                    $scope.tempBGroupList.push($scope.BGroupList[i]);
                }
            };

            console.log($scope.tempBGroupList);
        }
        $scope.call = function(mobNo) {

            $window.location.href = 'tel:' + mobNo;
        };

    });
