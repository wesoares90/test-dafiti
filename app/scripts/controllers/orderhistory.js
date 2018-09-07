'use strict';

/**
 * @ngdoc function
 * @name testDafitiApp.controller:OrderhistoryCtrl
 * @description
 * # OrderhistoryCtrl
 * Controller of the testDafitiApp
 */
angular.module('testDafitiApp')
.controller('OrderhistoryCtrl', function (ApiMethods) {

	var $public = this;

	$public.apiRoute = 'orderhistory';
	$public.detail = {};

	$public.getOrderhistory = function () {

		ApiMethods.queryArray({route: $public.apiRoute }, function(data) {
 
			$public.detail = data;

		});

	};

	$public.init = function () {

		$public.getOrderhistory();

	};

	$public.init();
	
});
