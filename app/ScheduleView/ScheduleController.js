'use strict';

angular.module('myApp.customer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/schedule', {
    templateUrl: 'ScheduleView/schedule.html',
    controller: 'ScheduleController'
  });
}])

.controller('ScheduleController', ['$scope', 'Upload',function($scope, Upload) {
  $scope.imagePreview = null;
  // upload on file select or drop
  $scope.uploadFiles = function (file, dish, index) {
    Upload.base64DataUrl(file).then(function (urls) {
      $scope.imagePreview = urls[0];
    });
  };
}]);