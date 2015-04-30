'use strict';
angular.module('MainDirective').directive('uploadForm', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/upload-form.html',
    controller: 'UploadController',
    controllerAs: 'uploadController',
    bindToController: true,
    scope: {
      file: '='
    }
  };
}]);
