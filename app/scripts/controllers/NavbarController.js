'use strict';
angular.module('MainController').controller('NavbarController', navbarController);

navbarController.$inject = ['AuthFactory', '$location', '$window'];

function navbarController(AuthFactory, $location, $window){
  var vm = this, data = JSON.parse($window.localStorage.getItem('devourr-user'));

  vm.isLoggedIn = function(){
    return AuthFactory.isAuthenticated();
  };

  vm.user = data.user.id;

  vm.logout = function(){
    AuthFactory.logout().then(function(){
      $location.path('/');
    });
  };
}
