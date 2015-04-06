'use strict';

/**
 * @ngdoc function
 * @name DevourrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the DevourrApp
 */
angular.module('DevourrApp').controller('AboutController', aboutController);

aboutController.$inject = [];

function aboutController() {
  console.log('hi from the about controller');
}
