'use strict';

describe('Service: ApiMethods', function () {

  // load the service's module
  beforeEach(module('testDafitiApp'));

  // instantiate service
  var ApiMethods;
  beforeEach(inject(function (_ApiMethods_) {
    ApiMethods = _ApiMethods_;
  }));

  it('should do something', function () {
    expect(!!ApiMethods).toBe(true);
  });

});
