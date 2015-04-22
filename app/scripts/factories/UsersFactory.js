'use strict';
angular.module('DevourrApp').factory('UsersFactory', ['$http', '$window', 'ServerUrl', '$routeParams', function($http, $window, ServerUrl, $routeParams){

  var users = [];
  var user = {};
  var awsUrl = 'https://s3.amazonaws.com/devourr/';
  var file;
  var suffix;

  var getAuthorized = function(){
    var data = JSON.parse($window.localStorage.getItem('devourr-user'));
    var config = {
      headers: {
        'AUTHORIZATION': 'Token token=' + data.user.token
      }
    };
  };

  var isCurrentUser = function(){
    return true;
    // var data = JSON.parse(window.localStorage.getItem('devourr-user'));
    // if(data) return !!data.user.token; // !! is a boolean that returns true if data exists
    // return false;
  };

  var getUsers = function(){
    var config = getAuthorized();
    return $http.get(ServerUrl + '/users', config).success(function(response){
      angular.copy(response.users, users);
    }).error(function(data, status, headers, config){
      console.log('You did not find all the users: ', data, status, headers, config);
    });
  };

  var getUserProfile = function(userId){
    var config = getAuthorized();
    return $http.get(ServerUrl + '/users/' + userId, config).success(function(response){
      angular.copy(response.user, user);
      console.log(response.user, 'factory got this');
    }).error(function(data, status, headers, config){
      console.log('You did not find the profile: ', data, status, headers, config);
    });
  };

  var urlify = function (file) {
    debugger
    var ready = file.type.replace(/[%&\/#"\\]/g, function(m) {
      return (m === '"' || m === '\\') ? ' ' : '%' + m.charCodeAt(0).toString(16);
    });
    debugger
    return ready;
  };

  var sendToAWS = function(response) {
    suffix = response.key;
    console.log(response);
    debugger
    // $http.post(ServerUrl + '/amazon/sign_key/');
    // $upload.upload({
    //   url: awsUrl,
    //   type: 'POST',
    //   fields: {
    //     key: response.key,
    //     AWSAccessKeyId: response.access_key,
    //     policy: response.policy,
    //     signature: response.signature,
    //     'Content-Type': file.type === '' ? 'application/octet-stream' : file.type
    //   },
    //   file: file
    // });
  };

  var getAWSsignKey = function(urlReady) {
    debugger
    return $http.get(ServerUrl + '/amazon/sign_key/' + urlReady);
  };

  var sendToRails = function(data) {
      return $http.post(ServerUrl + '/admin/products', data, railsConfig);
  };

  var edituser = function(credentials, userId){
    var config = getAuthorized();

    console.log(credentials);

    if (credentials.avatar) {
      file = credentials.avatar[0];
      var urlReady = urlify(file);
      return getAWSsignKey(urlReady)
      .success(sendToAWS)
      .then(function() {
        credentials.user.avatar = awsUrl + suffix;
        sendToRails(data);
      });
    } else {
      return sendToRails(data);
    }

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
