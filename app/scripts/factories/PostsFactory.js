'use strict';
angular.module('DevourrApp').factory('PostsFactory', ['$http', '$window', 'ServerUrl', function($http, $window, ServerUrl){
//, '$routeParams'
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

    return $http.get(ServerUrl + '/posts/' + postId, config).success(function(response){
      angular.copy(response.post, post);
      console.log(response.post, 'factory got this');
    }).error(function(data, status, headers, config){
      console.log('You did not find the POST: ', data, status, headers, config);
      // debugger
    });
  };

  var newPost = function(credentials){
    var data = JSON.parse($window.localStorage.getItem('devourr-user'));
    var config = {
      headers: {
        'AUTHORIZATION': 'Token token=' + data.user.token
      }
    };
    credentials.post['user_id'] = data.user.id;
    return $http.post(ServerUrl + '/posts', credentials).success(function(response){
      posts.push({post: response});
      console.log(response, 'factory got this');
    }).error(function(data, status, headers, config){
      console.log('You did not create a POST: ', data, status, headers, config);
    });
  };

  var editPost = function(credentials, postId){
    var data = JSON.parse($window.localStorage.getItem('devourr-user'));
    var config = {
      headers: {
        'AUTHORIZATION': 'Token token=' + data.user.token
      }
    };

    console.log(credentials);
    return $http.patch(ServerUrl + '/posts/' + postId, credentials).success(function(response){
      console.log('sucessful post edit!');
      console.log(response);
    }).error(function(data, status, headers, config){
      console.log('You did not update the post: ', data, status, headers, config);
    });
  };

  return {
    posts: posts,
    post: post,
    getPosts: getPosts,
    getPost: getPost,
    newPost: newPost,
    editPost: editPost
  };

}]);
