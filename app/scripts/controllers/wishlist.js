'use strict';

/**
 * @ngdoc function
 * @name testDafitiApp.controller:WishlistCtrl
 * @description
 * # WishlistCtrl
 * Controller of the testDafitiApp
 */
angular.module('testDafitiApp')
.controller('WishlistCtrl', function (ApiMethods) {

	var $public = this;

	$public.apiRoute = 'wishlist';
	$public.detail = {};

	$public.getWishlist = function () {

		ApiMethods.queryArray({route: $public.apiRoute }, function(data) {
 
			$public.detail = data;

		});

	};

	$public.removeWishlist = function (id) {

		ApiMethods.remove({route: $public.apiRoute, delete:id}, function(data) {

			$public.getWishlist();
 	
		});

	};	

	$public.init = function () {

		$public.getWishlist();

	};

	$public.init();
	
});
