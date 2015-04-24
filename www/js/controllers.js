angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicSideMenuDelegate) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.toggleMenu = function() {
  	alert('hi');
               $ionicSideMenuDelegate.toggleLeft();
           
        };
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
