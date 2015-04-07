'use strict';
angular.module('DevourrApp').factory('PostsFactory', ['$http', '$window', 'ServerUrl', function($http, $window, ServerUrl){

  var posts = [];

  var getPosts = function(){
    var data = JSON.parse($window.localStorage.getItem('devourr-user'));
    var config = {
      headers: {
        'AUTHORIZATION': 'Token token=' + data.user.token
      }
    };

    return $http.get(ServerUrl + '/posts', config).success(function(response){
      debugger
      angular.copy(response.posts, posts);
    }).error(function(data, status, headers, config){
      console.log('You\'re doing it wrong: ', data, status, headers, config);
    });
  };

  return {
    posts: posts,
    getPosts: getPosts
  };

}]);
