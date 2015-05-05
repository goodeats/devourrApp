'use strict';

angular.module('MainDirective').directive('file', function($scope) {

  if($scope.file.size > 10585760) {
    alert('Sorry, file size must be under 10MB');
    return false;
  }

  return {
    restrict: 'AE',
    // templateUrl: 'views/file-form.html',
    // controller: 'FileController',
    // controllerAs: 'fileController',
    // bindToController: true,
    scope: {
      file: '@'
    },
    link: function(scope, el, attrs){
      el.bind('change', function(event){
        var files = event.target.files;
        var file = files[0];
        scope.file = file;
        scope.$parent.file = file;
        scope.$apply();
      });
    }
  };
});
