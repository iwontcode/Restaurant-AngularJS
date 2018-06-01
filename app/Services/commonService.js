// AboutController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

angular.module('myApp.common')
    .factory('commonService', function () {
        function getStarterMenu() {
            var savedStarterMenu = JSON.parse(localStorage.getItem('starterMenu'));
            if(!(savedStarterMenu && savedStarterMenu.length)){
				savedStarterMenu = [];
			}
            return savedStarterMenu;
        }

        function getMainCourseMenu() {
            var savedMainCourseMenu = JSON.parse(localStorage.getItem('mainCourseMenu'));
            if(!(savedMainCourseMenu && savedMainCourseMenu.length)){
				savedMainCourseMenu = [];
			}
            return savedMainCourseMenu;
        }

        return {
            getStarterMenu: getStarterMenu,
            getMainCourseMenu: getMainCourseMenu
        }
    });