'use strict';

var reviewApp = angular.module('app');

reviewApp.controller('homeCtrl', ['$scope', 'Friends', function($scope, Friends){
  $scope.title = "Home Controller";
  $scope.list = ['node', 'grunt'];
  Friends.get().then(function(response) {
    $scope.friends = response.data; 
  });
  $scope.save = function() {
    alert(JSON.stringify($scope.friends));
  }
}]);

// angular
//   .module('app')
//   .controller('homeCtrl',['$scope', 'Friends', function($scope, Friends) {
//       $scope.title = "Home Controller Message";
//       $scope.list = ['node', 'grunt', 'bower'];
//       Friends.get().then(function(response) {
//           $scope.friends = response.data;
//         });

//       $scope.save = function() {
//         alert(JSON.stringify($scope.friends));
//       };

//   }]);