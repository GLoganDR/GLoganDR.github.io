(function(){
  'use strict';
  angular.module('logan', ['ngRoute'])

  //Angular Routes
  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $routeProvider
    .when('/', {templateUrl:'home/home.html', controller:'HomeCtrl'})
    .otherwise({redirectTo:'/'});
  }]);
})();
