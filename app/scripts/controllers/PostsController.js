'use strict';
angular.module('MainController').controller('PostsController', postsController);

postsController.$inject = ['PostsFactory', '$routeParams', '$location', '$window', '$http', 'ServerUrl'];

function postsController(PostsFactory, $routeParams, $location, $window, $http, ServerUrl){
  var vm = this;
  PostsFactory.getPost($routeParams.postId);
  vm.posts = PostsFactory.posts;
  vm.post = PostsFactory.post;

  vm.newPost = function(credentials){
    credentials = {post: credentials};
    console.log(credentials);
    PostsFactory.newPost(credentials).then(function(response){
      console.log('created new post!');
      console.log(response);
      vm.credentials = {};
      location.reload();
    });
  };
}
