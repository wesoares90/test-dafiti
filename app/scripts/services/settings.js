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
				link: 'adrress-list'
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

	$public.normalizeData = function(input) {

		var form = {
			name: input.firstName.$modelValue,
			lastName: input.lastName.$modelValue,
			email: input.email.$modelValue

		};

		return	form;	

	};


});
