'use strict';
angular.module('MainDirective').directive('newpostForm', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/newpost-form.html',
    controller: 'PostsController',
    controllerAs: 'postsController',
    bindToController: true,
    scope: {
      credentials: '='
    }
  };
}]);
