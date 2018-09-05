'use strict';

/**
 * @ngdoc function
 * @name testDafitiApp.controller:MyaccountCtrl
 * @description
 * # MyaccountCtrl
 * Controller of the testDafitiApp
 */
angular.module('testDafitiApp')
.controller('MyaccountCtrl', function (ApiMethods, $routeParams, settings) {

	var $public = this,
		$private = {};

	//Premissa que o usuário já está logado, caso não informe o parâmetro userId default será 1
	$private.userId = $routeParams.userId || 1;

	$public.detail = {};
	$public.viewEdit = false;
	$public.btnDisabled = false;

	$public.getAccount = function () {

		ApiMethods.query({route: 'myAccount', userId:$private.userId }, function(data) {
 
			$public.detail = data;

		});

	};

	$public.updateAccount = function (input) {

		$public.btnDisabled = true;

		var formData = settings.normalizeDataMyAccount(input);

		ApiMethods.update({route: 'myAccount', update:$private.userId }, formData, function(data) {
 	
 			$public.detail = data;
			$public.viewEdit = false;
			$public.btnDisabled = false;

		});

	};

	$public.init = function () {

		$public.getAccount();

	};

	$public.init();
	
});
