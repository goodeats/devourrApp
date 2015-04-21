'use strict';
angular.module('MainController').controller('SignupController', signupController);

signupController.$inject = ['AuthFactory', '$location'];

function signupController(AuthFactory, $location){
  var vm = this;

  vm.signup = function(credentials){
    console.log('found the SIGN UP button');
    AuthFactory.signup({ user: credentials }).then(function(response){
      vm.credentials = {};
      $location.path('/posts');
    });
  };
}
