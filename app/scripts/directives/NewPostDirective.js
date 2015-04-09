'use strict';
angular.module('MainDirective').directive('newPostForm', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/newpost-form.html',
    controller: 'PostsController',
    controllerAs: 'PostsController',
    bindToController: true,
    scope: {
      credentials: '='
    }
  };
}]);
