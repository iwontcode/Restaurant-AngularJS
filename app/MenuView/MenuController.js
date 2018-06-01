'use strict';

angular.module('myApp.common', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/menu', {
    templateUrl: 'MenuView/menu.html',
    controller: 'MenuController'
  });
}])

.controller('MenuController', ['$scope', 'Upload',function($scope, Upload) {
  $scope.imagePreview = null;
  // upload on file select or drop
  $scope.uploadFiles = function (file, dish, index) {
    Upload.base64DataUrl(file).then(function (urls) {
      $scope.imagePreview = urls[0];
    });
  };
}]);