'use strict';

angular.module('myApp.common', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'LoginView/login.html',
    controller: 'LoginController'
  });
}])

.controller('LoginController', ['$scope', 'Upload',function($scope, Upload) {
  $scope.imagePreview = null;
  // upload on file select or drop
  $scope.uploadFiles = function (file, dish, index) {
    Upload.base64DataUrl(file).then(function (urls) {
      $scope.imagePreview = urls[0];
    });
  };
}]);