angular
  .module('app')
  .controller('aboutCtrl', ['$scope', 'Friends', function($scope, Friends) {
    $scope.title = "About us";
    $scope.list = Friends.get();
  }]);