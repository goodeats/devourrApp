'use strict';
angular.module('MainController').controller('UploadController', uploadController);

uploadController.$inject = ['PostsFactory'];

function uploadController(PostsFactory){
  var vm = this;

  vm.newUpload = function(file){
    var credentials = {post: file};
    console.log(credentials);
    debugger
    PostsFactory.newPost(credentials).then(function(response){
      console.log('created new post!');
      console.log(response);
      vm.credentials = {};
      location.reload();
    });
  };

}
