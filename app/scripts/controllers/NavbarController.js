'use strict';
angular.module('MainController').controller('NavbarController', navbarController);

navbarController.$inject = ['AuthFactory', 'UsersFactory', '$location', '$window'];

function navbarController(AuthFactory, UsersFactory, $location, $window){
  var vm = this;

  vm.isLoggedIn = function(){
    return AuthFactory.isAuthenticated();
  };

  vm.isCurrentUser = function(){
    return 1;
    // return UsersFactory.isCurrentUser().then(function(){
    //   var data = JSON.parse($window.localStorage.getItem('devourr-user'));
    //   return data.id;
    // });
  };

  vm.logout = function(){
    AuthFactory.logout().then(function(){
      $location.path('/');
    });
  };
}
