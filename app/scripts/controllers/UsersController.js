'use strict';
angular.module('MainController').controller('UsersController', usersController);

usersController.$inject = ['UsersFactory', '$routeParams', '$location', '$window', '$http', 'ServerUrl'];

function usersController(UsersFactory, $routeParams, $location, $window, $http, ServerUrl){
  var vm = this;



  vm.users = UsersFactory.users;
  if ($routeParams.userId) {
    UsersFactory.getUserProfile($routeParams.userId);
    vm.user = UsersFactory.user;
  }

  vm.profile = function(){

      console.log('welcome back!');
      vm.credentials = {};
      $location.path('/posts');
  };

  vm.canEdit = false;
  vm.toggleCanEdit = function() {
    vm.canEdit = vm.canEdit === false ? true: false;
  };

  vm.edituser = function(credentials){
    console.log(credentials);
    credentials = {user: credentials};
    UsersFactory.edituser(credentials, $routeParams.userId).then(function(response){
      console.log('user edit form!');
      console.log(response);
      vm.credentials = {};
      location.reload();
    });
  };

}

