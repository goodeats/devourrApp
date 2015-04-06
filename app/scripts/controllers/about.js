'use strict';

/**
 * @ngdoc function
 * @name devourrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the devourrApp
 */
angular.module('devourrApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
