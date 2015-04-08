'use strict';
angular.module('MainController').controller('UsersController', usersController);

usersController.$inject = ['UsersFactory', '$routeParams', '$window', '$http', 'ServerUrl'];

function usersController(UsersFactory, $routeParams, $window, $http, ServerUrl){
  var vm = this;

  UsersFactory.getUserProfile($routeParams.userId);

  vm.users = UsersFactory.users;

  vm.user = UsersFactory.user;

}

