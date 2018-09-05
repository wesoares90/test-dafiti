'use strict';

/**
 * @ngdoc service
 * @name testDafitiApp.settings
 * @description
 * # settings
 * Service in the testDafitiApp.
 */
angular.module('testDafitiApp')
.service('settings', function () {

	var $public = this;
	
	$public.listMenu = function() {

		$public.itensMenu = [

			{
				label: 'Minha conta',
				link: 'my-account'
			},
			{
				label: 'Endereços de endrega',
				link: 'address-list'
			},
			{
				label: 'Histórico de pedido',
				link: 'order-history'
			},
			{
				label: 'Lista de desejos',
				link: 'wishlist'
			}

		];

		return $public.itensMenu;
	};

	$public.normalizeDataMyAccount = function(input) {

		var form = {
			name: input.firstName.$modelValue,
			lastName: input.lastName.$modelValue,
			email: input.email.$modelValue

		};

		return	form;	

	};

	$public.normalizeDataAdressList = function(input) {

		var form = {
			fullName: input.fullName.$modelValue,
			address: input.addressItem.$modelValue,
			postalCode: input.postalCode.$modelValue

		};

		return	form;	

	};	


});
