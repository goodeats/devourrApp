'use strict';

/**
 * @ngdoc function
 * @name devourrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devourrApp
 */
angular.module('devourrApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
