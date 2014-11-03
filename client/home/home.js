(function(){
  'use strict';

  var home = angular.module('logan');

  home.controller('HomeCtrl', ['$scope', function($scope){
    $scope.title = 'Home Page';
  }]);
})();
