'use strict';
console.log('if you can read this you are probably a web developer');
/**
 * @ngdoc overview
 * @name DevourrApp
 * @description
 * # DevourrApp
 *
 * Main module of the application.
 */
angular
  .module('DevourrApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'MainController',
    'MainDirective'
  ]).run(function($rootScope, $http, $window, $location, AuthFactory){
  if(AuthFactory.isAuthenticated()){
    var data = JSON.parse($window.localStorage.getItem('devourr-user'));
    $http.defaults.headers.common.Authorization = 'Token token=' + data.token;
  } else {
    $location.path('/login');
  }

  $rootScope.$on('$routeChangeStart', function(event, next){
    if(!AuthFactory.isAuthenticated()){
      $location.path('/login');
    } else {
      console.log('no posts here yet'); // PostsFactory.getPosts(); // in run function
    }
  });
});

  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
