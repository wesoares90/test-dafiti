'use strict';

/**
 * @ngdoc overview
 * @name testDafitiApp
 * @description
 * # testDafitiApp
 *
 * Main module of the application.
 */
angular
.module('testDafitiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
])
.config(function ($routeProvider, $locationProvider, $httpProvider) {
$routeProvider
    .when('/my-account', {
        templateUrl: 'views/my-account.html',
        controller: 'MyaccountCtrl',
        controllerAs: 'account'
    })
    .when('/address-list', {
        templateUrl: 'views/address-list.html',
        controller: 'AddresslistCtrl',
        controllerAs: 'address'
    }) 
    .when('/order-history', {
        templateUrl: 'views/order-history.html',
        controller: 'OrderhistoryCtrl',
        controllerAs: 'history'
    }) 
    .when('/wishlist', {
        templateUrl: 'views/wishlist.html',
        controller: 'WishlistCtrl',
        controllerAs: 'wishlist'
    })            
    .otherwise({
        redirectTo: '/my-account'
    });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $httpProvider.defaults.withCredentials = true;
});
