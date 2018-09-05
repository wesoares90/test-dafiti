'use strict';

/**
 * @ngdoc directive
 * @name testDafitiApp.directive:menuleft
 * @description
 * # menuleft
 */
angular.module('testDafitiApp')
.directive('menuleft', function (settings, $location) {
	var ddo = {};

	ddo.restrict = 'AE';
	ddo.transclude = true;
	ddo.templateUrl = 'views/menu-left.html';

    ddo.scope = {

        properties: '='

    };

	ddo.link = function(scope) {

		var $public = scope;     

		$public.$location = $location;
		$public.listMenu = settings.listMenu();


	};  

	return ddo;
	
});
