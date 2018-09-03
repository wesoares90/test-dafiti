'use strict';

describe('Controller: AddresslistCtrl', function () {

  // load the controller's module
  beforeEach(module('testDafitiApp'));

  var AddresslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddresslistCtrl = $controller('AddresslistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddresslistCtrl.awesomeThings.length).toBe(3);
  });
});
