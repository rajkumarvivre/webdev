'use strict';

var reviewApp = angular.module('app');

reviewApp.service('Friends', ['$http', function($http) {
  this.get = function() {
    return $http.get('api/friends.json');
  }
}]);

// angular
//   .module('app')
//   .factory('Friends', ['$http', function($http) {
//     return {
//       get: function() {
//         return $http.get('api/friends.json');
//       }
//     };
//   }]);