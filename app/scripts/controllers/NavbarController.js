'use strict';
angular.module('MainController').controller('NavbarController', navbarController);

navbarController.$inject = ['AuthFactory', 'UsersFactory', '$location'];

function navbarController(AuthFactory, UsersFactory, $location){
  var vm = this;

  vm.isLoggedIn = function(){
    return AuthFactory.isAuthenticated();
  };

  vm.isCurrentUser = function(){
    return UsersFactory.isCurrentUser();
  };

  vm.logout = function(){
    AuthFactory.logout().then(function(){
      $location.path('/');
    });
  };
}
