'use strict';
angular.module('DevourrApp').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController'
    })
    .when('/login',{
      templateUrl: 'views/login.html'
    })

    // .when('/posts',{
    //   templateUrl: 'views/posts.html',
    //   controller: 'PostsController',
    //   controllerAs: 'postsController'
    // })
    .otherwise({
      redirectTo: '/'
    });
}]);
