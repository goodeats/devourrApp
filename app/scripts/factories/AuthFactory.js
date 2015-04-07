'use strict';
angular.module('DevourrApp').factory('AuthFactory', ['$http', '$window', 'ServerUrl', function($http, $window, ServerUrl){

  var login = function(credentials){
    console.log(credentials);
    return $http.post(ServerUrl + '/login', credentials).success(function(response){
      _storeSession(response);
    });
  };

  var signup = function(credentials){
    return $http.post(ServerUrl + '/users', credentials).success(function(response){
      _storeSession(response);
    });
  };

  var logout = function(){
    return $http.get(ServerUrl + '/logout').success(function(response){
      $window.localStorage.removeItem('devourr-user');
    });
  };

  var isAuthenticated = function(){
    var data = JSON.parse($window.localStorage.getItem('devourr-user'));
    if(data) return !!data.token; // !! is a boolean that returns true if data exists
    return false;
  };

  var clearStorage = function(){

  };

  var _storeSession = function(data){
    $window.localStorage.setItem('devourr-user', JSON.stringify(data));
    $http.defaults.headers.common.Authorization = 'Token token=' + data.token;
  };

  return {
    login: login,
    signup: signup,
    logout: logout,
    isAuthenticated: isAuthenticated,
    clearStorage: clearStorage
  };
}]);
