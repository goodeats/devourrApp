'use strict';
angular.module('MainController').controller('LoginController', loginController);

loginController.$inject = ['AuthFactory', '$location'];

function loginController(AuthFactory, $location){
  var vm = this;

  vm.login = function(credentials){
    // debugger
    AuthFactory.login({user: credentials}).then(function(response){
      console.log('login should redirect to home');
      vm.credentials = {};
      $location.path('/');
    });
  };
}
