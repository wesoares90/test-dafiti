'use strict';

describe('Controller: OrderhistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('testDafitiApp'));

  var OrderhistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderhistoryCtrl = $controller('OrderhistoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrderhistoryCtrl.awesomeThings.length).toBe(3);
  });
});
