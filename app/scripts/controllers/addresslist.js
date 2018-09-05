'use strict';

/**
 * @ngdoc function
 * @name testDafitiApp.controller:AddresslistCtrl
 * @description
 * # AddresslistCtrl
 * Controller of the testDafitiApp
 */
angular.module('testDafitiApp')
.controller('AddresslistCtrl', function (ApiMethods, settings) {

	var $public = this;

	$public.detail = [];
	$public.apiRoute = 'addressList';
	
	$public.getAddress = function () {

		ApiMethods.queryArray({route:$public.apiRoute}, function(data) {
 
			$public.detail = data;

		});

	};

	$public.updateAddress = function (input, id) {

		var formData = settings.normalizeDataAdressList(input);

		ApiMethods.update({route: $public.apiRoute, update:id }, formData, function(data) {

			$public.getAddress();
 	
		});

	};

	$public.removeAddress = function (id) {

		ApiMethods.remove({route: $public.apiRoute, delete:id}, function(data) {

			$public.getAddress();
 	
		});

	};	

	$public.newAddress = function (input) {

		var formData = settings.normalizeDataAdressList(input);

		ApiMethods.new({route: $public.apiRoute}, formData, function(data) {

			$public.getAddress();
 	
		});

	};		

	$public.init = function () {

		$public.getAddress();

	};

	$public.init();

	
});
