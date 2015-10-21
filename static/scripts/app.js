'use strict';


angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
    ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'static/views/main.html',
        controller: 'MainCtrl'
      })
	  .when('/ratingsPage', {
        templateUrl: 'static/views/ratingsPage.html',
        controller: 'RatingController'
      })
	  .when('/fromfb', {
        templateUrl: 'static/views/fromfb.html',
        controller: 'FromFBCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
