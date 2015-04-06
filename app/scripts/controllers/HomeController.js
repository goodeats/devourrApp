'use strict';
angular.module('MainController').controller('HomeController', homeController);

homeController.$inject = [];

function homeController(){
  //do something on the home view
  console.log('hi from the home controller');
}
