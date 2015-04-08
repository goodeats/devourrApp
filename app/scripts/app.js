'use strict';
console.log('if you can read this you are probably a web developer :)');
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
  ]).run(function($rootScope, $http, $window, $location, AuthFactory, PostsFactory, UsersFactory){
  if(AuthFactory.isAuthenticated()){
    var data = JSON.parse($window.localStorage.getItem('devourr-user'));
    $http.defaults.headers.common.Authorization = 'Token token=' + data.user.token;
  } else {
    $location.path('/login');
  }

  $rootScope.$on('$routeChangeStart', function(event, next){
    if(!AuthFactory.isAuthenticated()){
      $location.path('/login');
    } else {
      PostsFactory.getPosts();
      UsersFactory.getUsers();
      UsersFactory.getUserProfile();
    }
  });
});


// App.addLinks = function(text){
//   var textAr = text.split(' ');
//   for (var i = 0; i < textAr.length; i++){
//     if (textAr[i].slice(0,7) === 'http://' || textAr[i].slice(0,8) === 'https://'){
//       textAr[i] = '<a href=' + textAr[i] + ' target="_blank">' + textAr[i] + '</a>';
//     } else if (textAr[i].slice(0,1) === '@'){
//       textAr[i] = '<a href="https://twitter.com/' + textAr[i] + '" target="_blank">' + textAr[i] + '</a>';
//     } else if (textAr[i].slice(0,1) === '#'){
//       textAr[i] = "<a href='https://twitter.com/hashtag/" + textAr[i].replace(/[#]/g, '') + "?src=hash' target='_blank'>" + textAr[i] + "</a>";
//     }
//   }
//   return textAr.join(' ');
// };
