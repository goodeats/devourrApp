'use strict';
angular.module('MainDirective').directive('edituserForm', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/edituser-form.html',
    controller: 'UsersController',
    controllerAs: 'UsersController',
    bindToController: true,
    scope: {
      credentials: '='
    }
  };
}]);
