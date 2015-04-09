'use strict';
angular.module('MainController').controller('PostsController', postsController);

postsController.$inject = ['PostsFactory', '$routeParams'];

function postsController(PostsFactory, $routeParams){
  var vm = this;

  vm.posts = PostsFactory.posts;

  if ($routeParams.postId) {
    PostsFactory.getPost($routeParams.postId);
    vm.post = PostsFactory.post;
  }


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

  vm.editPost = function(credentials){
    console.log(credentials);
    credentials = {post: credentials};
    PostsFactory.editPost(credentials, $routeParams.postId).then(function(response){
      console.log('post edit form!');
      console.log(response);
      vm.credentials = {};
      location.reload();
    });
  };
}
