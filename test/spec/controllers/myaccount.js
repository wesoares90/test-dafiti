'use strict';

describe('Controller: MyaccountCtrl', function () {

  // load the controller's module
  beforeEach(module('testDafitiApp'));

  var MyaccountCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyaccountCtrl = $controller('MyaccountCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyaccountCtrl.awesomeThings.length).toBe(3);
  });
});
