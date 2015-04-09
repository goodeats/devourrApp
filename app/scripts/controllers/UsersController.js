'use strict';
angular.module('MainController').controller('UsersController', usersController);

usersController.$inject = ['UsersFactory', '$routeParams', '$location', '$window', '$http', 'ServerUrl'];

function usersController(UsersFactory, $routeParams, $location, $window, $http, ServerUrl){
  var vm = this;

  UsersFactory.getUserProfile($routeParams.userId);

  vm.users = UsersFactory.users;
  vm.user = UsersFactory.user;

  vm.canEdit = false;
  vm.toggleCanEdit = function() {
    vm.canEdit = vm.canEdit === false ? true: false;
  };

  vm.edituser = function(credentials){
    // debugger
    console.log(credentials);
    credentials = {user: credentials};
    UsersFactory.edituser(credentials, $routeParams.userId).then(function(response){
      console.log('user edit form!');
      // debugger
      console.log(response);
      vm.credentials = {};
      // location.reload();
      // debugger
      location.reload();
    });
  };

}

