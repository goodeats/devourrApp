'use strict';
angular.module('DevourrApp').factory('AmazonFactory', ['$http', '$window', 'ServerUrl', function($http, $window, ServerUrl){

  var getAuthorized = function(){
    var data = JSON.parse($window.localStorage.getItem('devourr-user'));
    var config = {
      headers: {
        'AUTHORIZATION': 'Token token=' + data.user.token
      }
    };
    return config;
  };

  var editavatar = function(credentials, userId){
    getAuthorized();
    console.log(getAmazonKey());
    return $http.patch(ServerUrl + '/users/' + userId, credentials).success(function(response){
    }).error(function(data, status, headers, config){
      console.log('You did not update the profile: ', data, status, headers, config);
    });
  };

  var getAmazonKey = function(){
    var config = getAuthorized();
    return $http.get(ServerUrl + '/amazon/sign_key/image%2Fjpeg', config).success(function(response){
      angular.copy(response.user, user);
      console.log(response.user, 'factory got this');
    }).error(function(data, status, headers, config){
      console.log('You did not find the profile: ', data, status, headers, config);
    });
  };

  return {
    getAuthorized: getAuthorized,
    editavatar: editavatar,
    getAmazonKey: getAmazonKey
  };
}]);
