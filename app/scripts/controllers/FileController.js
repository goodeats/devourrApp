'use strict';
angular.module('MainController').controller('FileController', fileController);

fileController.$inject = ['$scope', 'AWS'];

function fileController($scope, AWS){
  var vm = this;

  $scope.creds = {
    bucket: 'devourr',
    access_key: '',
    secret_key: ''
  };

  $scope.upload = function() {
    // Configure The S3 Object
    AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
    AWS.config.region = 'us-east-1';
    var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });

    if($scope.file) {
      var params = { Key: $scope.file.name, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256' };

      bucket.putObject(params, function(err, data) {
        if(err) {
          // There Was An Error With Your S3 Config
          alert(err.message);
          return false;
        }
        else {
          // Success!
          alert('Upload Done');
        }
      })
      .on('httpUploadProgress',function(progress) {
        // Log Progress Information
        console.log(Math.round(progress.loaded / progress.total * 100) + '% done');
      });
    }
    else {
      // No File Selected
      alert('No File Selected');
    }
  };
}
