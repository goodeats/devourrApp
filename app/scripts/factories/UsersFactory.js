'use strict';
angular.module('DevourrApp').factory('UsersFactory', ['$http', '$window', 'ServerUrl', '$routeParams', function($http, $window, ServerUrl, $routeParams){

  var users = [];
  var user = {};

  var isCurrentUser = function(){
    return true;
    // var data = JSON.parse(window.localStorage.getItem('devourr-user'));
    // if(data) return !!data.user.token; // !! is a boolean that returns true if data exists
    // return false;
  };

  var getUsers = function(){
    var data = JSON.parse($window.localStorage.getItem('devourr-user'));
    var config = {
      headers: {
        'AUTHORIZATION': 'Token token=' + data.user.token
      }
    };

    return $http.get(ServerUrl + '/users', config).success(function(response){
      angular.copy(response.users, users);
    }).error(function(data, status, headers, config){
      console.log('You did not find all the users: ', data, status, headers, config);
    });
  };

  var getUserProfile = function(userId){
    var data = JSON.parse($window.localStorage.getItem('devourr-user'));
    var config = {
      headers: {
        'AUTHORIZATION': 'Token token=' + data.user.token
      }
    };

    return $http.get(ServerUrl + '/users/' + userId, config).success(function(response){
      angular.copy(response.user, user);
      console.log(response.user, 'factory got this');
    }).error(function(data, status, headers, config){
      console.log('You did not find the profile: ', data, status, headers, config);
    });
  };

  var edituser = function(credentials, userId){
    var data = JSON.parse($window.localStorage.getItem('devourr-user'));
    var config = {
      headers: {
        'AUTHORIZATION': 'Token token=' + data.user.token
      }
    };

    console.log(credentials);
    return $http.patch(ServerUrl + '/users/' + userId, credentials).success(function(response){
      console.log('sucessful user edit!');
      console.log(response);
    }).error(function(data, status, headers, config){
      console.log('You did not update the profile: ', data, status, headers, config);
    });
  };

  return {
    users: users,
    user: user,
    isCurrentUser: isCurrentUser,
    getUsers: getUsers,
    getUserProfile: getUserProfile,
    edituser: edituser
  };

}]);
