'use strict';

describe('Directive: menuleft', function () {

  // load the directive's module
  beforeEach(module('testDafitiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<menuleft></menuleft>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the menuleft directive');
  }));
});
