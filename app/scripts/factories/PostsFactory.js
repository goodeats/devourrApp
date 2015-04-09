'use strict';
angular.module('DevourrApp').factory('PostsFactory', ['$http', '$window', 'ServerUrl', '$routeParams', function($http, $window, ServerUrl, $routeParams){

  var posts = [];
  var post = {};

  var getPosts = function(){
    var data = JSON.parse($window.localStorage.getItem('devourr-user'));
    var config = {
      headers: {
        'AUTHORIZATION': 'Token token=' + data.user.token
      }
    };

    return $http.get(ServerUrl + '/posts', config).success(function(response){
      angular.copy(response.posts, posts);
      // debugger
    }).error(function(data, status, headers, config){
      console.log('You\'re doing it wrong: ', data, status, headers, config);
    });
  };

  var getPost = function(postId){
    var data = JSON.parse($window.localStorage.getItem('devourr-user'));
    var config = {
      headers: {
        'AUTHORIZATION': 'Token token=' + data.user.token
      }
    };
    debugger
    return $http.get(ServerUrl + '/posts/' + postId, config).success(function(response){
      angular.copy(response.post, post);
      console.log(response.post, 'factory got this');
    }).error(function(data, status, headers, config){
      console.log('You did not find the POST: ', data, status, headers, config);
      // debugger
    });
  };

  return {
    posts: posts,
    post: post,
    getPosts: getPosts,
    getPost: getPost
  };

}]);
