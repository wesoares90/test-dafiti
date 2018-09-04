'use strict';

describe('Controller: WishlistCtrl', function () {

  // load the controller's module
  beforeEach(module('testDafitiApp'));

  var WishlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WishlistCtrl = $controller('WishlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WishlistCtrl.awesomeThings.length).toBe(3);
  });
});
