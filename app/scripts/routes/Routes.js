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
    .when('/posts',{
      templateUrl: 'views/posts.html',
      controller: 'PostsController',
      controllerAs: 'postsController'
    })
    .when('/posts/:postId',{
      templateUrl: 'views/post.html',
      controller: 'PostsController',
      controllerAs: 'postsController'
    })
    .when('/users',{
      templateUrl: 'views/users.html',
      controller: 'UsersController',
      controllerAs: 'usersController'
    })
    .when('/users/:userId',{
      templateUrl: 'views/user.html',
      controller: 'UsersController',
      controllerAs: 'usersController'
    })
    // .when('/profile',{
    //   templateUrl: 'views/users.html',
    //   controller: 'UsersController',
    //   controllerAs: 'usersController'
    // })
    .otherwise({
      redirectTo: '/'
    });
}]);
