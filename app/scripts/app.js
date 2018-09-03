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
    .when('/adrress-list', {
        templateUrl: 'views/adrress-list.html',
        controller: 'AddresslistCtrl',
        controllerAs: 'adrress'
    })    
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $httpProvider.defaults.withCredentials = true;
});
