'use strict';

angular.module('myApp.admin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/buildmenu', {
    templateUrl: 'BuildMenuView/buildMenu.html',
    controller: 'BuildMenuController'
  });
}])

.controller('BuildMenuController', ['$scope', 'Upload', 'commonService',function($scope, Upload, commonService) {
  // Just a housekeeping.
		// In the init method we are declaring all the
		// neccesarry settings and assignments to be run once
		// controller is invoked
		init();

		function init() {
			$scope.starterMenu = commonService.getStarterMenu();
			$scope.mainCourseMenu = commonService.getMainCourseMenu();
			$scope.hasError = false;
			$scope.saveSuccessful = false;
			$scope.role = localStorage.getItem('userRole');
		};

		$scope.addNewDish = function (dishType) {
			var baseObj = {
				name: '',
				price: '',
				url: '',
				dishType: dishType,
				imagePreview: '../../resources/images/placeholder.jpg',
				selected: false
			};
			if (dishType === 'starter') {
				$scope.starterMenu.push(baseObj);
			}
			if (dishType === 'mainCourse') {
				$scope.mainCourseMenu.push(baseObj);
			}

		};

		// upload on file select or drop
		$scope.uploadFiles = function (file, dish, index) {
			Upload.base64DataUrl(file).then(function (urls) {
				dish.imagePreview = urls[0];
			});
		};

		//Save the menu in localstorage
		$scope.saveMenu = function (isValid) {
			if (isValid) {
				localStorage.setItem('starterMenu', JSON.stringify($scope.starterMenu));
				localStorage.setItem('mainCourseMenu', JSON.stringify($scope.mainCourseMenu));
				$scope.hasError = false;
				$scope.saveSuccessful = true;
			} else {
				$scope.hasError = true;
			}
		};
}]);