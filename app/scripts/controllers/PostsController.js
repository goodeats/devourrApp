'use strict';
angular.module('MainController').controller('PostsController', postsController);

postsController.$inject = ['PostsFactory', '$routeParams', '$location', '$window', '$http', 'ServerUrl'];

function postsController(PostsFactory, $routeParams, $location, $window, $http, ServerUrl){
  var vm = this;
  PostsFactory.getPost($routeParams.postId);
  vm.posts = PostsFactory.posts;
  vm.post = PostsFactory.post;

  vm.newPost = function(credentials){
    // debugger
    console.log(credentials);
    // UsersFactory.edituser(credentials, $routeParams.userId).then(function(response){
    //   console.log('user edit form!');
    //   // debugger
    //   console.log(response);
    //   vm.credentials = {};
    //   // $location.path('/');
    // });
  };
}
