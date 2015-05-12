'use strict';
angular.module('starter')
    .service('BloodBankService', function BloodBankService($http) {

        this.getBloodDirectory = function() {
            return $http({
                method: 'GET',
                cache:true,
                url: 'https://spreadsheets.google.com/feeds/list/1YVW-1g3KkASvIT_a8MD6hMJOyfzIggfeSDZgFhMrT_M/od6/public/basic?hl=en_US&alt=json'
            });
        };
    });
    