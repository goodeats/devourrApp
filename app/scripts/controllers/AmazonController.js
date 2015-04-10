'use strict';
angular.module('MainController').controller('AmazonController', amazonController);

amazonController.$inject = ['AmazonFactory', '$routeParams', '$location', '$window', '$http', 'ServerUrl'];

function amazonController(AmazonFactory, $routeParams, $location, $window, $http, ServerUrl){
  var vm = this;

  vm.editavatar = function(credentials){
    AmazonFactory.editavatar(credentials, $routeParams.userId).then(function(response){
      vm.credentials = {};
      location.reload();
    });
  };
}
