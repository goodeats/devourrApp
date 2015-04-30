'use strict';
angular.module('MainController').controller('PostsController', postsController);

postsController.$inject = ['PostsFactory', '$routeParams', '$scope'];

function postsController(PostsFactory, $routeParams, $scope){
  var vm = this;


  vm.canEdit = false;
  vm.toggleCanEdit = function() {
    vm.canEdit = vm.canEdit === false ? true: false;
  };

  vm.posts = PostsFactory.posts;

  if ($routeParams.postId) {
    PostsFactory.getPost($routeParams.postId);
    vm.post = PostsFactory.post;
  }

  $scope.uploadFile = function(){
    console.log("did a file upload?");
  };

  vm.newPost = function(credentials){
    credentials = {post: credentials};
    console.log(credentials);
    debugger
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
