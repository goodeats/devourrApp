'use strict';
angular.module('MainDirective').directive('editpostForm', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/editpost-form.html',
    controller: 'PostsController',
    controllerAs: 'postsController',
    bindToController: true,
    scope: {
      credentials: '='
    }
  };
}]);
