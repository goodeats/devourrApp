'use strict';
angular.module('MainDirective').directive('editavatarForm', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/editavatar-form.html',
    controller: 'AmazonController',
    controllerAs: 'amazonController',
    bindToController: true,
    scope: {
      credentials: '='
    }
  };
}]);

// 'use strict';

// angular.module('MainDirective').directive('amazon', function() {
//   return {
//     restrict: 'AE',
//     scope: {
//       files: '@' // '='
//     },
//     link: function(scope, el, attrs){
//       el.bind('change', function(event){
//         var files = event.target.files;
//         var file = files[0];
//         scope.file = file;
//         scope.$parent.file = file;
//         scope.$apply();
//       });
//     }
//   };
// }); // http://www.cheynewallace.com/uploading-to-s3-with-angularjs/



