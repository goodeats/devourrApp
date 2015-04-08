'use strict';
angular.module('MainController').controller('UsersController', usersController);

usersController.$inject = ['UsersFactory', '$routeParams', '$window', '$http', 'ServerUrl'];

function usersController(UsersFactory, $routeParams, $window, $http, ServerUrl){
  var vm = this;

  UsersFactory.getUserProfile($routeParams.userId);

  vm.users = UsersFactory.users;

  vm.user = UsersFactory.user;

  vm.edituser = function(credentials){
    // debugger
    UsersFactory.edituser(credentials, $routeParams.userId).then(function(response){
      console.log('user edit form!');
      console.log(response);
      vm.credentials = {};
      // $location.path('/');
    });
  };

}

