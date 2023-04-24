/* eslint-env mocha */
'use strict';

var intersection = require('../../lib/intersection');
// eslint-disable-next-line n/no-unpublished-require
var expect = require('chai').expect;

describe('intersection', function () {
  it('finds the intersection between 2 arrays', function () {
    var a = ['foo', 'bar', 'baz'];
    var b = ['bar', 'baz', 'qux'];
    var expectedResult = ['bar', 'baz'];
    var result = intersection(a, b);

    expect(result).to.eql(expectedResult);
  });

  it('finds the intersection between 2 arrays', function () {
    var a = ['foo', 'bar', 'baz'];
    var b = ['bar', 'baz', 'qux'];
    var expectedResult = ['bar', 'baz'];
    var result = intersection(b, a);

    expect(result).to.eql(expectedResult);
  });
});
