'use strict';

/**
 * @ngdoc service
 * @name testDafitiApp.ApiMethods
 * @description
 * # ApiMethods
 * Factory in the testDafitiApp.
 */
angular.module('testDafitiApp')
.factory('ApiMethods', function ($resource) {

    return $resource('https://test-dafiti.herokuapp.com/:route/:delete/:update/:userId/', {  }, {
        
        query: { 
            method: 'GET',
            isArray: false
        },
        queryArray: { 
            method: 'GET',
            isArray: true
        },        
        remove: { 
            method: 'DELETE',
            delete: '@delete'
        },
        update: { 
            method: 'PUT',
            uptade: '@update'
        },
        new: { 
            method: 'POST'
        }        

    });  

});
