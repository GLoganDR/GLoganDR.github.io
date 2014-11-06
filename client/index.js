(function(){
  'use strict';
  angular.module('logan', ['ngRoute'])

  //Angular Routes
  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $routeProvider
    .when('/', {templateUrl:'home/home.html', controller:'HomeCtrl'})
    .when('/contact', {templateUrl:'contact/contact.html', controller:'ContactCtrl'})
    .when('/about', {templateUrl:'about/about.html', controller:'AboutCtrl'})
    .when('/portfolio', {templateURL:'portfolio/portfolio.html', controller:'PortfolioCtrl'})
    .otherwise({redirectTo:'/'});
  }]);
})();
